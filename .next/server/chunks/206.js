"use strict";
exports.id = 206;
exports.ids = [206];
exports.modules = {

/***/ 7206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bd": () => (/* binding */ getAllPosts),
/* harmony export */   "WW": () => (/* binding */ getAllTagPosts),
/* harmony export */   "zQ": () => (/* binding */ getPostBySlug)
/* harmony export */ });
/* unused harmony exports getPostSlugs, getCategorySlugs, getTagSlugs */
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _slugify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1019);




const postsDirectory = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(process.cwd(), "contents");
function getPostSlugs() {
    const files = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
    const slugs = files.map((file)=>{
        const fullPath = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(postsDirectory, file);
        const content = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8")).data;
        return content.slug ? content.slug : file.replace(/\.md$/, "");
    });
    return slugs;
}
function getPostBySlug(slug, fields = []) {
    const files = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
    let fileName = slug;
    for (let file of files){
        const fullPath = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(postsDirectory, file);
        const content = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8")).data;
        if (content.slug === slug) fileName = file.replace(/\.md$/, "");
    }
    const fullPath = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(postsDirectory, `${fileName}.md`);
    const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8");
    const { data , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
    const items = {};
    // Ensure only the minimal needed data is exposed
    fields.forEach((field)=>{
        if (field === "slug") {
            items[field] = slug;
        }
        if (field === "content") {
            items[field] = content;
        }
        if (typeof data[field] !== "undefined") {
            if (field === "datetime") {
                items[field] = '"' + data[field] + '"';
            } else {
                items[field] = data[field];
            }
        }
    });
    return items;
}
function getCategorySlugs(category) {
    const files = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
    let slugs = [];
    for (let file of files){
        const fullPath = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(postsDirectory, file);
        const { data  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8"));
        if ((0,_slugify__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(data.category) !== category) continue;
        slugs.push(data.slug ? data.slug : file.replace(/\.md$/, ""));
    }
    return slugs;
}
function getAllPosts(fields = [], category) {
    const slugs = category ? getCategorySlugs(category) : getPostSlugs();
    const posts = slugs.map((slug)=>getPostBySlug(slug, fields))// sort posts by date in descending order
    .sort((post1, post2)=>new Date(post1.datetime).getTime() > new Date(post2.datetime).getTime() ? -1 : 1);
    return posts;
}
function getTagSlugs(tag) {
    const files = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
    let slugs = [];
    for (let file of files){
        const fullPath = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(postsDirectory, file);
        const { data  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8"));
        if (!data.tags) continue;
        if (!data.tags.includes(tag)) continue;
        slugs.push(data.slug ? data.slug : file.replace(/\.md$/, ""));
    }
    return slugs;
}
function getAllTagPosts(fields = [], tag) {
    const slugs = getTagSlugs(tag);
    const posts = slugs.map((slug)=>getPostBySlug(slug, fields))// sort posts by date in descending order
    .sort((post1, post2)=>new Date(post1.datetime).getTime() > new Date(post2.datetime).getTime() ? -1 : 1);
    return posts;
}


/***/ }),

/***/ 1019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ unslugify),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const slugify = (str)=>str.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
const unslugify = (str)=>str.toLowerCase().trim().replace(/[-]+/g, " ");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slugify);


/***/ })

};
;