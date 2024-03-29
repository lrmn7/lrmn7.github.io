---
title: Label encoders
description: >-
  Encode label of multiple attribute, and return the encoder object.
excerpt: >-
  Encode label of multiple attribute, and return the encoder object. Import this script to [tempermonkey]
datetime: 2019-10-06T14:35:07.322Z
slug: label-encoders
featured: true
category: Snippets
tags:
  - python
  - nlp
author: L RMN
coverImage: >-
  https://res.cloudinary.com/lrmn/image/upload/v1685631797/lrmn.dev/label-encoders_zpwyem.png
coverImageAlt: Encode label of multiple attribute, and return the encoder object.
coverImageWidth: "1200"
coverImageHeight: "700"
ogImage: "https://res.cloudinary.com/lrmn/image/upload/v1685631797/lrmn.dev/label-encoders_zpwyem.png"
ogImageAlt: Encode label of multiple attribute, and return the encoder object.
type: article
language: English
_template: blog_article
---

## SNIPPETS CODE

```py
def encode_label(df, return_object=False, using_class=False):
  # function to encode label to number and return new dataframe
  from sklearn.preprocessing import LabelEncoder
  temp = df.copy()
  class_list = {}
  objList = temp.select_dtypes(include = "object").columns
  for feat in objList:
    le = LabelEncoder()
    if using_class:
      le = using_class[feat]
    else:
      le = le.fit(temp[feat].astype(str))
      class_list.update({feat:le})
    temp[feat] = le.transform(temp[feat].astype(str))
  # if you wanna return le object
  if return_object:
    return temp, class_list
  return temp

# how to use
df_encoded, le_objects = encode_label(df, return_object=True)

#for example, you wanna encode your test data
#and you need pre-trained encoder from your data train
df_test_encoded, le_test_objects = encode_label(df_test, return_object=True, using_class=le_objects)
```

## How to use?

Import this script to [tempermonkey](https://www.tampermonkey.net/)
