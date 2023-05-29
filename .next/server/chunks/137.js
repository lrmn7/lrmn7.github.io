"use strict";
exports.id = 137;
exports.ids = [137];
exports.modules = {

/***/ 6137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_DateTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2446);




const BlogCard = ({ post  })=>{
    const { title , slug , excerpt , datetime  } = post;
    const sectionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    // Animations
    // useEffect(() => {
    //   const q = gsap.utils.selector(sectionRef);
    //   gsap.registerPlugin(ScrollTrigger);
    //   const tl = gsap.timeline({
    //     // defaults: { stagger: 0.2, duration: 0.2 },
    //     scrollTrigger: {
    //       trigger: sectionRef.current,
    //       start: `70% bottom`,
    //     },
    //   });
    //   tl.fromTo(
    //     q(".blog-title"),
    //     { opacity: 0, y: 50 },
    //     {
    //       opacity: 1,
    //       y: 0,
    //       ease: "Power3.easeInOut",
    //       duration: 0.5,
    //       stagger: 0.2,
    //     }
    //   )
    //     .fromTo(q(".blog-datetime"), { y: 100 }, { y: 0, stagger: 0.2 }, "<25%")
    //     .fromTo(
    //       q(".blog-excerpt"),
    //       { opacity: 0 },
    //       { opacity: 1, stagger: 0.2, duration: 1.5 },
    //       "<10%"
    //     );
    // }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
        ref: sectionRef,
        className: "my-4 md:mt-0 md:mb-8",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "overflow-hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: `/blog/posts/${slug}`,
                    className: "blog-title link inline-block outline-none dark:outline-none focus-within:underline",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "text-lg font-medium",
                        children: title
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "overflow-hidden",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "blog-datetime italic text-sm mb-1 text-carddark dark:text-gray-300 flex items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-4 w-4 mr-2",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            "aria-hidden": "true",
                            strokeWidth: 2,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_DateTime__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            datetime: datetime
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "blog-excerpt dark:text-gray-300",
                children: excerpt
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogCard);


/***/ })

};
;