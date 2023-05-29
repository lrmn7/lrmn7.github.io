"use strict";
exports.id = 446;
exports.ids = [446];
exports.modules = {

/***/ 2446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const DateTime = ({ datetime  })=>{
    const [formattedDate, setFormattedDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [formattedTime, setFormattedTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const myDatetime = new Date(datetime);
        const modifiedDate = myDatetime.toLocaleDateString([], {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
        const modifiedTime = myDatetime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });
        setFormattedDate(modifiedDate);
        setFormattedTime(modifiedTime);
    }, [
        datetime
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "sr-only",
                children: "Posted on: "
            }),
            formattedDate,
            " ",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                "aria-hidden": "true",
                children: "|"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "sr-only",
                children: "\xa0at\xa0"
            }),
            " ",
            formattedTime
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateTime);


/***/ })

};
;