"use strict";
(() => {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 1751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L0": () => (/* binding */ useFilter),
/* harmony export */   "Qr": () => (/* binding */ ProvideFilter)
/* harmony export */ });
/* unused harmony export filterContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const filterContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    searchText: "",
    postLanguage: "All"
});
const ProvideFilter = ({ children  })=>{
    const value = useProvideFilter();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(filterContext.Provider, {
        value: value,
        children: children
    });
};
const useFilter = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(filterContext);
const useProvideFilter = ()=>{
    const [searchText, setSearchText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [postLanguage, setPostLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("All");
    const onSearch = (val)=>{
        setSearchText(val);
    };
    const onLanguageChange = (val)=>{
        setPostLanguage(val);
    };
    return {
        searchText,
        postLanguage,
        onSearch,
        onLanguageChange
    };
};


/***/ }),

/***/ 9989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ blog),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/AppHead.tsx
var AppHead = __webpack_require__(4133);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(4287);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);
// EXTERNAL MODULE: external "gsap/dist/ScrollTrigger"
var ScrollTrigger_ = __webpack_require__(4965);
// EXTERNAL MODULE: ./context/filter.tsx
var filter = __webpack_require__(1751);
;// CONCATENATED MODULE: ./sections/BlogHeroSection.tsx





const BlogHeroSection = ()=>{
    const { searchText , onSearch , postLanguage , onLanguageChange  } = (0,filter/* useFilter */.L0)();
    const handleSearch = (e)=>{
        onSearch(e.target.value);
    };
    const sectionRef = (0,external_react_.useRef)(null);
    const q = external_gsap_default().utils.selector(sectionRef);
    (0,external_react_.useEffect)(()=>{
        external_gsap_default().registerPlugin(ScrollTrigger_.ScrollTrigger);
        // text animation after initial load
        external_gsap_default().fromTo(q(".main-header"), {
            y: 100
        }, {
            y: 0,
            delay: 1.1
        });
        // intro animation
        let tl = external_gsap_default().timeline({
            defaults: {
                stagger: 0.1,
                duration: 0.2
            }
        });
        tl.fromTo(q(".intro-1"), {
            y: 30,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            delay: 1.3
        }).fromTo(q(".intro-2"), {
            y: 30,
            opacity: 0
        }, {
            y: 0,
            opacity: 1
        }).fromTo(q(".intro-3"), {
            y: 30,
            opacity: 0
        }, {
            y: 0,
            opacity: 1
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        ref: sectionRef,
        className: "py-4 pt-20 md:pt-24 px-4 sm:px-8 md:px-20 max-w-4xl mx-auto",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-10",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "overflow-hidden py-1",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                            className: "main-header text-4xl lg:text-5xl font-bold",
                            children: [
                                "L RMN's",
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-marrsgreen dark:text-carrigreen",
                                    children: "Blog"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "intro-1 mt-4 mb-2",
                                children: "Hello, everyone! Welcome to my personal blog."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "intro-2",
                                children: "In this blog, I will be writing about my projects (what I do/how I did), my personal experiences, and some random stuffs."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "intro-3",
                                children: [
                                    "You can follow me on my social media and",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://github.com/lrmn7",
                                        className: "link",
                                        children: "Github account."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-5 w-5 inline-block ml-1 fill-yellow-500",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        "aria-hidden": "true",
                                        strokeWidth: 0,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                className: "relative block my-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        className: "placeholder:italic placeholder:text-opacity-75 py-3 pr-14 pl-5 block bg-cardlight dark:bg-carddark w-full rounded shadow-md border border-cardlight dark:border-carddark border-opacity-40 focus:outline-none focus:border-marrslight focus:dark:border-carrilight",
                        placeholder: "Search for anything...",
                        type: "text",
                        name: "search",
                        defaultValue: searchText,
                        onChange: handleSearch,
                        autoComplete: "off",
                        autoFocus: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "absolute inset-y-0 right-0 flex items-center pr-5 opacity-80",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            "aria-hidden": "true",
                            className: "fill-marrsgreen dark:fill-carrigreen",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center my-4 md:my-6",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                        htmlFor: "language",
                        className: "mr-2 flex items-center gap-x-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5 inline-block",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                "aria-hidden": "true",
                                strokeWidth: 2,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                                })
                            }),
                            "Blog Posts Language:",
                            " "
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                        name: "language",
                        id: "language",
                        className: "px-2 py-1 bg-cardlight dark:bg-carddark focus-visible:outline-marrsgreen dark:focus-visible:outline-carrigreen",
                        defaultValue: postLanguage,
                        onChange: (e)=>onLanguageChange(e.target.value),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "All",
                                children: "All"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "English",
                                children: "English"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "Indonesia",
                                children: "Indonesia"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const sections_BlogHeroSection = (BlogHeroSection);

// EXTERNAL MODULE: ./components/SkipToMain.tsx
var SkipToMain = __webpack_require__(5831);
// EXTERNAL MODULE: ./components/SocialLinks.tsx
var SocialLinks = __webpack_require__(8819);
// EXTERNAL MODULE: ./components/blog/BlogHeader.tsx
var BlogHeader = __webpack_require__(3811);
// EXTERNAL MODULE: ./components/BlogCard.tsx
var BlogCard = __webpack_require__(6137);
// EXTERNAL MODULE: ./components/Footer.tsx
var Footer = __webpack_require__(4260);
// EXTERNAL MODULE: ./utils/api.ts
var api = __webpack_require__(7206);
// EXTERNAL MODULE: ./components/Loader.tsx
var Loader = __webpack_require__(4866);
;// CONCATENATED MODULE: ./pages/blog/index.tsx











const Blog = ({ posts  })=>{
    const { searchText , postLanguage  } = (0,filter/* useFilter */.L0)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(AppHead/* default */.Z, {
                title: "Blog - L RMN"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Loader/* default */.Z, {
                children: "L RMN's Blog"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-bglight dark:bg-bgdark min-h-screen",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(SkipToMain/* default */.Z, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(BlogHeader/* default */.Z, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(SocialLinks/* default */.Z, {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                            id: "main",
                            className: "mb-20",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(sections_BlogHeroSection, {}),
                                searchText === "" && postLanguage === "All" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "px-4 sm:px-8 md:px-20 max-w-4xl mx-auto",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    className: "text-2xl font-medium mb-2",
                                                    children: "Featured Posts"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                    children: posts.map((post)=>post.featured && /*#__PURE__*/ jsx_runtime_.jsx(BlogCard/* default */.Z, {
                                                            post: post
                                                        }, post.slug))
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                            "aria-hidden": "true",
                                            className: "mx-4 sm:mx-20 md:mx-auto max-w-xl lg:max-w-2xl my-6"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "px-4 sm:px-8 md:px-20 max-w-4xl mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                            className: "text-2xl font-medium mb-2",
                                            children: [
                                                searchText === "" && postLanguage === "All" && "All Posts",
                                                searchText !== "" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: "Search result(s)"
                                                }),
                                                postLanguage !== "All" && `Posts written in '${postLanguage}' language`
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            children: posts.filter(({ title  })=>title.toLowerCase().includes(searchText.toLowerCase())).filter(({ language  })=>{
                                                if (postLanguage === "All") return true;
                                                return language === postLanguage;
                                            }).map((post)=>/*#__PURE__*/ jsx_runtime_.jsx(BlogCard/* default */.Z, {
                                                    post: post
                                                }, post.slug))
                                        })
                                    ]
                                })
                            ]
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
        "featured",
        "language"
    ]);
    return {
        props: {
            posts
        }
    };
};
/* harmony default export */ const blog = (Blog);


/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 4287:
/***/ ((module) => {

module.exports = require("gsap");

/***/ }),

/***/ 4965:
/***/ ((module) => {

module.exports = require("gsap/dist/ScrollTrigger");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,573,676,664,206,55,446,811,866,137], () => (__webpack_exec__(9989)));
module.exports = __webpack_exports__;

})();