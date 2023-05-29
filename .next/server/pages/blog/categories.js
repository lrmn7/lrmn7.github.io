"use strict";
(() => {
var exports = {};
exports.id = 977;
exports.ids = [977];
exports.modules = {

/***/ 2803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ categories),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(4287);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);
// EXTERNAL MODULE: ./components/AppHead.tsx
var AppHead = __webpack_require__(4133);
// EXTERNAL MODULE: ./components/SkipToMain.tsx
var SkipToMain = __webpack_require__(5831);
// EXTERNAL MODULE: ./components/SocialLinks.tsx
var SocialLinks = __webpack_require__(8819);
// EXTERNAL MODULE: ./components/blog/BlogHeader.tsx
var BlogHeader = __webpack_require__(3811);
// EXTERNAL MODULE: ./components/DateTime.tsx
var DateTime = __webpack_require__(2446);
;// CONCATENATED MODULE: ./components/BlogCardBox.tsx



const BlogCardBox = ({ post , fullWH =false , className =""  })=>{
    const { title , slug , excerpt , datetime  } = post;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: `blog-card-box sm:min-w-[17rem] bg-gray-100 dark:bg-carddark p-4 rounded shadow hover:shadow-md ${fullWH ? "w-full" : "w-72 my-2"} ${className}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-2",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: `/blog/posts/${slug}`,
                    className: "link inline-block",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: `${fullWH ? "text-lg sm:text-md" : "text-md"} font-medium`,
                        children: title
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "italic text-sm mb-1 text-carddark dark:text-gray-300 flex items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-4 w-4 mr-2",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "aria-hidden": "true",
                        strokeWidth: 2,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(DateTime/* default */.Z, {
                        datetime: datetime
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: `dark:text-gray-300 ${fullWH ? "text-base sm:text-sm" : "text-sm w-60"} overflow-hidden`,
                children: excerpt
            })
        ]
    });
};
/* harmony default export */ const components_BlogCardBox = (BlogCardBox);

// EXTERNAL MODULE: ./components/Footer.tsx
var Footer = __webpack_require__(4260);
// EXTERNAL MODULE: ./components/Loader.tsx
var Loader = __webpack_require__(4866);
// EXTERNAL MODULE: ./utils/api.ts
var api = __webpack_require__(7206);
// EXTERNAL MODULE: ./utils/slugify.ts
var slugify = __webpack_require__(1019);
;// CONCATENATED MODULE: ./pages/blog/categories/index.tsx













const Blog = ({ categories , categorizedPosts  })=>{
    const sectionRef = (0,external_react_.useRef)(null);
    // Animations
    (0,external_react_.useEffect)(()=>{
        const q = external_gsap_default().utils.selector(sectionRef);
        external_gsap_default().utils.toArray(q(".category-title-text")).forEach((tag, i)=>{
            const initialDelay = 1.2;
            const delayTime = i == 0 ? initialDelay : initialDelay + i * 0.2;
            external_gsap_default().fromTo(tag, {
                x: -100,
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                ease: "back.out(1.7)",
                delay: delayTime
            });
        });
        external_gsap_default().utils.toArray(q(".blog-card-box")).forEach((tag, i)=>{
            const initialDelay = 1.5;
            const delayTime = i == 0 ? initialDelay : initialDelay + i * 0.1;
            external_gsap_default().fromTo(tag, {
                opacity: 0
            }, {
                opacity: 1,
                delay: delayTime
            });
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(AppHead/* default */.Z, {
                title: "Blog - L RMN"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Loader/* default */.Z, {
                children: "Categories"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                ref: sectionRef,
                className: "bg-bglight dark:bg-bgdark",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(SkipToMain/* default */.Z, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(BlogHeader/* default */.Z, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(SocialLinks/* default */.Z, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("main", {
                            id: "main",
                            className: "blog-main",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                className: "blog-section",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "text-3xl lg:text-4xl font-bold mb-4",
                                        children: "Categories"
                                    }),
                                    categories.map((category)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "my-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: `/blog/categories/${(0,slugify/* default */.Z)(category)}`,
                                                    className: "inline-block link-outline",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        className: "category-title overflow-hidden text-xl font-medium pl-2 border-l-4 hover:text-marrsgreen dark:hover:text-carrigreen border-marrsgreen dark:border-carrigreen",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "category-title-text inline-block",
                                                            children: category
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                    className: "flex space-x-4 overflow-x-auto overflow-y-hidden snap-x touch-auto",
                                                    children: categorizedPosts[category].map((post)=>/*#__PURE__*/ jsx_runtime_.jsx(components_BlogCardBox, {
                                                            post: post
                                                        }, post.slug))
                                                })
                                            ]
                                        }, category))
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
                    ]
                })
            })
        ]
    });
};
const getStaticProps = async ()=>{
    const posts = (0,api/* getAllPosts */.Bd)([
        "slug",
        "title",
        "excerpt",
        "datetime",
        "category"
    ]);
    // get category array ['cate1', 'cate2']
    const categories = posts.map((post)=>post.category).filter((x, i, a)=>a.indexOf(x) == i);
    // get categorized posts {'cate1': [{post1}, {post2}], 'cate2': ...}
    let categorizedPosts = {};
    posts.forEach((post)=>{
        if (categorizedPosts[post.category]) {
            categorizedPosts[post.category].length <= 4 && categorizedPosts[post.category].push(post);
        } else {
            categorizedPosts[post.category] = [
                post
            ];
        }
    });
    return {
        props: {
            categories,
            categorizedPosts
        }
    };
};
/* harmony default export */ const categories = (Blog);


/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 4287:
/***/ ((module) => {

module.exports = require("gsap");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 5786:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,573,676,664,206,55,446,811,866], () => (__webpack_exec__(2803)));
module.exports = __webpack_exports__;

})();