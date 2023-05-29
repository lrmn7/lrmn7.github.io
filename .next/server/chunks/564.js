"use strict";
exports.id = 564;
exports.ids = [564];
exports.modules = {

/***/ 9564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const Tag = ({ tag , size ="sm" , count  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: `/blog/tags/${tag}`,
        passHref: true,
        className: `blog-tag link-outline group whitespace-nowrap dark:fill-bglight hover:bg-marrsgreen hover:text-bglight hover:fill-bglight dark:hover:bg-carrigreen dark:hover:text-bgdark dark:hover:fill-bgdark ${size === "lg" ? "py-2 px-3 text-base mr-4 my-2" : "py-1 px-2 text-xs mr-2 my-1"} bg-gray-300 dark:bg-carddark rounded inline-block shadow hover:shadow-md cursor-pointer`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                className: `inline-block ${size === "lg" ? "scale-100" : "scale-75"} mr-1`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M13.707 3.293A.996.996 0 0 0 13 3H4a1 1 0 0 0-1 1v9c0 .266.105.52.293.707l8 8a.997.997 0 0 0 1.414 0l9-9a.999.999 0 0 0 0-1.414l-8-8zM12 19.586l-7-7V5h7.586l7 7L12 19.586z"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                        cx: "8.496",
                        cy: "8.495",
                        r: "1.505"
                    })
                ]
            }),
            tag,
            count && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                "aria-label": `: ${count} article${count > 1 ? "s" : ""}`,
                className: "ml-2 inline-block bg-marrslight dark:bg-carrilight group-hover:bg-marrsdark dark:group-hover:bg-carridark dark:text-bgdark text-sm p-1 min-w-[1.75rem] text-center rounded-full",
                children: count
            })
        ]
    }, tag);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tag);


/***/ })

};
;