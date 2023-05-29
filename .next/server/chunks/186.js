exports.id = 186;
exports.ids = [186];
exports.modules = {

/***/ 1898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4965);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_DateTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2446);







const BlogImageCard = ({ post , fullWH =false , className =""  })=>{
    const { title , coverImage , coverImageAlt , slug , excerpt , datetime  } = post;
    const sectionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    // Animations
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const q = gsap__WEBPACK_IMPORTED_MODULE_4___default().utils.selector(sectionRef);
        gsap__WEBPACK_IMPORTED_MODULE_4___default().registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__.ScrollTrigger);
        const tl = gsap__WEBPACK_IMPORTED_MODULE_4___default().timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: `70% bottom`
            }
        });
        tl.fromTo(q(".blog-image"), {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            ease: "Power3.easeInOut",
            duration: 0.5,
            stagger: 0.2
        }).fromTo(q(".blog-title"), {
            y: 100
        }, {
            y: 0,
            stagger: 0.2
        }, "<25%").fromTo(q(".blog-text"), {
            opacity: 0
        }, {
            opacity: 1,
            stagger: 0.2
        }, "<10%");
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ref: sectionRef,
        className: `sm:min-w-[17rem] transition translate-y-2 hover:-translate-y-0 max-w-md bg-gray-100 dark:bg-carddark p-4 rounded shadow-md hover:shadow-xl ${fullWH ? "w-full" : "w-72 my-2"} ${className}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col-reverse",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mb-2 overflow-hidden h-14",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: `/blog/posts/${slug}`,
                            className: "blog-title link inline-block outline-none dark:outline-none focus-within:underline",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: `${fullWH ? "text-lg sm:text-md" : "text-md"} font-medium line-clamp-2`,
                                children: title
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "blog-image relative w-full h-48 md:h-40 mb-3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: coverImage,
                            sizes: "100vw",
                            fill: true,
                            className: "object-contain",
                            alt: coverImageAlt ?? title
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "italic text-sm mb-1 text-carddark dark:text-gray-300 flex items-center",
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_DateTime__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        datetime: datetime
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: `blog-text dark:text-gray-300 ${fullWH ? "text-base sm:text-sm" : "text-sm w-60"} overflow-hidden text-ellipsis line-clamp-4 leading-7 sm:leading-6`,
                children: excerpt
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogImageCard);


/***/ }),

/***/ 3505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var hooks_useScrollListener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7441);
/* harmony import */ var context_section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1992);







const navLinks = [
    {
        url: "#whoami",
        svg: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"
            })
        }),
        text: "Who am i?"
    },
    {
        url: "#projects",
        svg: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"
            })
        }),
        text: "Projects"
    },
    {
        url: "#blog",
        svg: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M19.875 3H4.125C2.953 3 2 3.897 2 5v14c0 1.103.953 2 2.125 2h15.75C21.047 21 22 20.103 22 19V5c0-1.103-.953-2-2.125-2zm0 16H4.125c-.057 0-.096-.016-.113-.016-.007 0-.011.002-.012.008L3.988 5.046c.007-.01.052-.046.137-.046h15.75c.079.001.122.028.125.008l.012 13.946c-.007.01-.052.046-.137.046z"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M6 7h6v6H6zm7 8H6v2h12v-2h-4zm1-4h4v2h-4zm0-4h4v2h-4z"
                })
            ]
        }),
        text: "Blog"
    },
    {
        url: "#contact",
        svg: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M20.563 3.34a1.002 1.002 0 0 0-.989-.079l-17 8a1 1 0 0 0 .026 1.821L8 15.445v6.722l5.836-4.168 4.764 2.084a1 1 0 0 0 1.399-.85l1-15a1.005 1.005 0 0 0-.436-.893zm-2.466 14.34-5.269-2.306L16 9.167l-7.649 4.25-2.932-1.283 13.471-6.34-.793 11.886z"
            })
        }),
        text: "Contact"
    }
];
const Header = ()=>{
    const { theme , setTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const { currentSection  } = (0,context_section__WEBPACK_IMPORTED_MODULE_6__/* .useSection */ .fp)();
    const [navClassList, setNavClassList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const scroll = (0,hooks_useScrollListener__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const mainRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const themeBtnRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        gsap__WEBPACK_IMPORTED_MODULE_4___default().fromTo(mainRef.current, {
            top: -120
        }, {
            top: 0,
            duration: 0.7,
            delay: 1,
            ease: "Power0.easeNone"
        });
    }, []);
    // update theme button aria-label according to theme value
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const themeBtn = themeBtnRef.current;
        if (themeBtn) {
            themeBtn.ariaLabel = theme ?? "light";
        }
    }, [
        theme
    ]);
    // update classList of nav on scroll
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const _classList = [];
        if (scroll.y > 150 && scroll.y - scroll.lastY > 0) _classList.push("!shadow-md");
        setNavClassList(_classList);
    }, [
        scroll.y,
        scroll.lastY
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: "md:flex",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ref: mainRef,
            className: `main-nav lower-glassmorphism bg-bglight dark:bg-bgdark z-30 top-0 shadow-sm fixed duration-400 px-4 sm:px-8 h-16 w-full ${navClassList.join(" ")}`,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full h-full mx-auto max-w-6xl flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/",
                        className: "text-xl sm:text-2xl md:hover:text-marrsgreen dark:md:hover:text-carrigreen focus-visible:outline-marrsgreen dark:focus-visible:outline-carrigreen",
                        children: [
                            "L RMN",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-marrsgreen dark:text-carrigreen",
                                children: ".dev"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "glassmorphism md:bg-transparent md:dark:bg-transparent md:backdrop-blur-none fixed md:static bottom-4 z-30 left-1/2 md:left-auto transform -translate-x-1/2 md:transform-none bg-bglight dark:bg-carddark dark:text-textlight w-11/12 rounded drop-shadow-lg md:drop-shadow-none",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    className: "flex justify-evenly items-center py-1",
                                    children: navLinks.map((navLink)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                href: navLink.url,
                                                className: `text-sm md:text-lg flex flex-col items-center w-[4.5rem] md:w-auto dark:fill-textlight md:mr-6 md:hover:text-marrsgreen md:dark:hover:text-carrigreen link-outline ${currentSection === navLink.text.toLocaleLowerCase() && "text-marrsgreen dark:text-carrigreen fill-marrsgreen dark:fill-carrigreen"}`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "md:hidden",
                                                        children: navLink.svg
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "whitespace-nowrap",
                                                        children: navLink.text
                                                    })
                                                ]
                                            })
                                        }, navLink.url))
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                type: "button",
                                onClick: ()=>setTheme(theme === "dark" ? "light" : "dark"),
                                title: "Toggles light & dark theme",
                                ref: themeBtnRef,
                                // aria-label={theme === "dark" ? "dark" : "light"}
                                "aria-live": "polite",
                                className: "w-8 h-8 ml-1 rounded-lg flex justify-center items-center link-outline",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        className: "fill-textlight hidden dark:inline-block transform scale-110 md:dark:hover:fill-carrigreen",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        className: "dark:hidden transform scale-90 md:hover:fill-marrsgreen ",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ 407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const LinkButton = ({ href , targetBlank =false , outline =false , className ="" , children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        role: "button",
        className: `${outline ? "border border-marrsgreen hover:bg-marrsgreen dark:border-carrigreen dark:hover:bg-carrigreen text-marrsgreen hover:text-cardlight dark:text-carrigreen dark:hover:text-carddark transition" : "bg-marrsgreen hover:bg-marrslight active:bg-marrsdark dark:hover:bg-carrilight dark:active:bg-carridark dark:bg-carrigreen text-bglight dark:text-bgdark"} py-2 px-3 rounded lg:text-xl ${className} outline-marrsgreen dark:outline-carrigreen focus-visible:outline-double outline-offset-2`,
        href: href,
        target: `${targetBlank ? "_blank" : "_self"}`,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkButton);


/***/ }),

/***/ 8909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useOnScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useOnScreen(ref) {
    const observerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const [isOnScreen, setIsOnScreen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        observerRef.current = new IntersectionObserver(([entry])=>setIsOnScreen(entry.isIntersecting));
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        observerRef.current.observe(ref.current);
        return ()=>{
            observerRef.current.disconnect();
        };
    }, [
        ref
    ]);
    return isOnScreen;
}


/***/ }),

/***/ 331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useScrollActive)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useScrollActive(ref) {
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const scrollActive = ()=>{
            const scrollY = window.pageYOffset;
            const sectionHeight = ref.current?.offsetHeight;
            const sectionTop = ref.current?.offsetTop - 80;
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                setState(true);
            } else {
                setState(false);
            }
        };
        scrollActive();
        window.addEventListener("scroll", scrollActive);
        return ()=>{
            window.removeEventListener("scroll", scrollActive);
        };
    }, []);
    return state;
}


/***/ }),

/***/ 4186:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "meta": () => (/* binding */ meta)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AppHead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4133);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4866);
/* harmony import */ var _components_SkipToMain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5831);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3505);
/* harmony import */ var _components_SocialLinks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8819);
/* harmony import */ var _sections_HeroSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4937);
/* harmony import */ var _sections_AboutSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3610);
/* harmony import */ var _sections_ProjectSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8074);
/* harmony import */ var _sections_BlogSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7743);
/* harmony import */ var _sections_ContactSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2427);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4260);
/* harmony import */ var utils_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7206);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sections_BlogSection__WEBPACK_IMPORTED_MODULE_9__]);
_sections_BlogSection__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const meta = {
    description: "Hi i'm L RMN, So if you're looking for someone who is mediocre at everything and has a knack for making bad jokes, I'm your guy!.",
    author: "L RMN",
    type: "website",
    ogImage: `${"https://lrmn-dev.is-a.fun"}/lrmn-dev-og.png`,
    siteName: "L RMN",
    imageAlt: "L RMN portfolio website"
};
const Home = ({ blogPosts  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AppHead__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                title: "L RMN - A software edgyneer who love cats",
                url: `${"https://lrmn-dev.is-a.fun"}`,
                meta: meta
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                children: "L RMN.dev"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-bglight dark:bg-bgdark overflow-hidden",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SkipToMain__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                            id: "main",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sections_HeroSection__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sections_AboutSection__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sections_ProjectSection__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sections_BlogSection__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    posts: blogPosts
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sections_ContactSection__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SocialLinks__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            page: "index"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
                    ]
                })
            })
        ]
    });
};
const getStaticProps = async ()=>{
    const blogPosts = (0,utils_api__WEBPACK_IMPORTED_MODULE_12__/* .getAllPosts */ .Bd)([
        "coverImage",
        "coverImageAlt",
        "slug",
        "title",
        "excerpt",
        "datetime",
        "featured"
    ]);
    return {
        props: {
            blogPosts
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ sections_AboutSection)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react-rough-notation"
var external_react_rough_notation_ = __webpack_require__(9499);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(4287);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);
// EXTERNAL MODULE: external "gsap/dist/ScrollTrigger"
var ScrollTrigger_ = __webpack_require__(4965);
// EXTERNAL MODULE: ./context/section.tsx
var section = __webpack_require__(1992);
// EXTERNAL MODULE: ./hooks/useOnScreen.ts
var useOnScreen = __webpack_require__(8909);
// EXTERNAL MODULE: ./hooks/useScrollActive.ts
var useScrollActive = __webpack_require__(331);
;// CONCATENATED MODULE: ./public/avatar.jpg
/* harmony default export */ const avatar = ({"src":"/_next/static/media/avatar.a0eb257f.jpg","height":1350,"width":1080,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAcEAACAgIDAAAAAAAAAAAAAAABAgAEAwYREyH/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAMAwEAAhEDEQA/AId93sWKWCvlRV6VCh0YqW4UD2IiGFX/2Q==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./public/extra/dots.svg
/* harmony default export */ const dots = ({"src":"/_next/static/media/dots.e4f5d76c.svg","height":153,"width":102});
;// CONCATENATED MODULE: ./public/extra/dots-dark.svg
/* harmony default export */ const dots_dark = ({"src":"/_next/static/media/dots-dark.1d795f60.svg","height":153,"width":102});
;// CONCATENATED MODULE: ./public/extra/arrow.svg
/* harmony default export */ const arrow = ({"src":"/_next/static/media/arrow.f75276a4.svg","height":60,"width":19});
;// CONCATENATED MODULE: ./components/AboutBgSvg.tsx





const AboutBgSvg = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                "aria-hidden": "true",
                className: "bg-svg hidden lg:inline-block absolute bottom-12 -left-12 dark:hidden",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: dots,
                    width: 102,
                    height: 153,
                    alt: "dots background"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                "aria-hidden": "true",
                className: "bg-svg absolute bottom-12 -left-12 hidden lg:dark:inline-block",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: dots_dark,
                    width: 102,
                    height: 153,
                    alt: "dots background"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                "aria-hidden": "true",
                className: "bg-svg hidden lg:inline-block absolute bottom-96 -right-4 dark:hidden",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: dots,
                    width: 102,
                    height: 153,
                    alt: "dots background"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                "aria-hidden": "true",
                className: "bg-svg absolute bottom-96 -right-4 hidden lg:dark:inline-block",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: dots_dark,
                    width: 102,
                    height: 153,
                    alt: "dots background"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                "aria-hidden": "true",
                className: "bg-svg hidden lg:inline-block absolute bottom-24 right-44",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: arrow,
                    width: 19,
                    height: 60,
                    alt: "up arrow"
                })
            })
        ]
    });
};
/* harmony default export */ const components_AboutBgSvg = (AboutBgSvg);

;// CONCATENATED MODULE: ./components/EduGroup.tsx




const EduGroup = ({ edu  })=>{
    const sectionRef = (0,external_react_.useRef)(null);
    // Animations
    (0,external_react_.useEffect)(()=>{
        const q = external_gsap_default().utils.selector(sectionRef);
        external_gsap_default().registerPlugin(ScrollTrigger_.ScrollTrigger);
        const tl = external_gsap_default().timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: `50% bottom`
            }
        });
        tl.fromTo(q(".edu-heading"), {
            opacity: 0,
            y: 100
        }, {
            opacity: 1,
            y: 0,
            ease: "Power3.easeInOut",
            duration: 0.5,
            stagger: 0.2
        }).fromTo(q(".edu-info"), {
            opacity: 0,
            y: 100
        }, {
            opacity: 1,
            y: 0,
            stagger: 0.2
        }, "<25%").fromTo(q(".edu-list"), {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            stagger: 0.2
        }, "<10%");
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "edu-group mb-4",
        ref: sectionRef,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "overflow-hidden",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    className: `edu-heading text-marrsgreen dark:text-carrigreen text-lg font-medium`,
                    children: edu.title
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "overflow-hidden",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: `edu-info text-slate-500 dark:text-slate-200 italic`,
                    children: edu.subTitle
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                role: "list",
                className: " marker:text-marrsgreen dark:marker:text-carrigreen list-disc pl-6 space-y-1 mt-1",
                children: edu.list.map((li)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: `edu-list`,
                        children: li
                    }, li))
            })
        ]
    });
};
/* harmony default export */ const components_EduGroup = (EduGroup);

;// CONCATENATED MODULE: ./sections/AboutSection.tsx













const AboutSection = ()=>{
    const sectionRef = (0,external_react_.useRef)(null);
    const isSecOnScreen = (0,useOnScreen/* default */.Z)(sectionRef);
    const q = external_gsap_default().utils.selector(sectionRef);
    (0,external_react_.useEffect)(()=>{
        external_gsap_default().registerPlugin(ScrollTrigger_.ScrollTrigger);
        // profile-picture
        external_gsap_default().fromTo(q(".profile-picture"), {
            x: -200,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: q(".profile-picture"),
                start: "20% bottom"
            }
        });
        const fromAnimation = {
            y: 100,
            opacity: 0
        };
        const toAnimation = (triggerTarget)=>({
                y: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: q(`.${triggerTarget}`),
                    start: "top bottom"
                }
            });
        // about-intro
        external_gsap_default().fromTo(q(".about-intro"), fromAnimation, toAnimation("about-intro"));
        // edu-bg
        external_gsap_default().fromTo(q(".edu-bg"), fromAnimation, toAnimation("edu-bg"));
        // bg svg parallax effect
        external_gsap_default().fromTo(q(".bg-svg"), {
            y: -80
        }, {
            scrollTrigger: {
                trigger: q(".bg-svg"),
                scrub: true
            },
            y: 65,
            duration: 3
        });
        // image bg svg parallax effect
        external_gsap_default().fromTo(q(".img-svg"), {
            y: -30
        }, {
            scrollTrigger: {
                trigger: q(".img-svg"),
                start: "80% 75%",
                scrub: true
            },
            y: 30
        });
    }, []);
    const { theme  } = (0,external_next_themes_.useTheme)();
    const eduRef = (0,external_react_.useRef)(null);
    // Set active link for about section
    const aboutSection = (0,useScrollActive/* default */.Z)(sectionRef);
    const { onSectionChange  } = (0,section/* useSection */.fp)();
    (0,external_react_.useEffect)(()=>{
        aboutSection ? onSectionChange("who am i?") : onSectionChange("");
    }, [
        aboutSection
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ref: sectionRef,
        className: "about-panel bg-white dark:bg-[#1B2731] relative",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                id: "whoami",
                className: "section",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_rough_notation_.RoughNotationGroup, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_rough_notation_.RoughNotation, {
                                type: "underline",
                                color: `${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`,
                                strokeWidth: 2,
                                order: 1,
                                show: isSecOnScreen,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "section-heading",
                                    children: "Who am I?"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "md:grid grid-rows-5 lg:grid-rows-6 grid-cols-5",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-start-1 col-end-3 row-start-1 row-end-4 lg:row-end-7 lg:col-start-1 lg:col-end-3 flex justify-center items-center py-4 lg:mb-[20%]",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "relative w-72",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                width: "96",
                                                height: "21",
                                                viewBox: "0 0 96 21",
                                                "aria-hidden": "true",
                                                className: "img-svg hidden lg:block fill-marrsgreen dark:fill-carrigreen absolute -top-14 -left-14",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M79.2202 0.959991L62.7802 17.32L46.3301 0.959991L29.8902 17.32L13.4501 0.959991L0.410156 13.94L0.400146 17.58L13.4501 4.58999L29.8902 20.95L46.3301 4.58999L62.7802 20.95L79.2202 4.58999L93.7302 19.02L95.5402 17.19L79.2202 0.959991Z"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "profile-picture overflow-hidden md:overflow-visible rounded-md md:shadow-2xl",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: avatar,
                                                    width: 1700,
                                                    height: 1790,
                                                    priority: true,
                                                    alt: "L RMN profile picture",
                                                    className: "rounded-md"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                width: "15",
                                                height: "14",
                                                viewBox: "0 0 15 14",
                                                "aria-hidden": "true",
                                                className: "img-svg hidden lg:block fill-marrsgreen dark:fill-carrigreen absolute bottom-8 -right-12",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M13.68 11.51L9.23 7.05998L13.68 2.61C14.24 2.05 14.24 1.12999 13.68 0.569994C13.12 0.00999391 12.2 0.00999391 11.64 0.569994L7.19002 5.02001L2.74001 0.569994C2.18001 0.00999391 1.26003 0.00999391 0.700029 0.569994C0.140029 1.12999 0.140029 2.05 0.700029 2.61L5.15004 7.05998L0.700029 11.51C0.140029 12.07 0.140029 12.99 0.700029 13.55C1.26003 14.11 2.18001 14.11 2.74001 13.55L7.19002 9.09999L11.64 13.55C12.2 14.11 13.12 14.11 13.68 13.55C14.24 12.99 14.24 12.08 13.68 11.51Z"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                width: "24",
                                                height: "24",
                                                viewBox: "0 0 24 24",
                                                "aria-hidden": "true",
                                                className: "img-svg hidden lg:block fill-[#FF9D00] absolute -bottom-10 right-6 scale-150",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M11.6799 5.68002C11.6799 8.65002 9.27994 11.05 6.30994 11.05C3.33994 11.05 0.939941 8.65002 0.939941 5.68002C0.939941 2.71002 3.33994 0.309998 6.30994 0.309998C9.27994 0.309998 11.6799 2.71002 11.6799 5.68002Z"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "col-start-1 col-end-3 row-start-4 row-end-6 lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-6 lg:ml-8 lg:mt-auto about-intro",
                                    children: [
                                        "Hey Greetings, I'm ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://github.com/lrmn7",
                                            target: "_blank",
                                            rel: "noopener",
                                            children: "L RMN"
                                        }),
                                        "\uD83D\uDC4B\uD83C\uDFFC, I'm just your average person with a dabbling of coding knowledge and zero experience in ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://lrmn-vp.is-a.fun",
                                            target: "_blank",
                                            rel: "noopener",
                                            children: "virtual photography"
                                        }),
                                        ". When I'm not scrolling through cat videos on Instagram, I like to pretend to work on projects, hang out with people who barely tolerate me, read books (mostly for the pictures), listen to music, go on adventures (to the bed and back), and daydream about new ideas that I will likely never act on."
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-start-3 col-end-6 row-start-1 row-end-6 lg:row-start-2 lg:row-end-7 md:ml-8 place-content-end",
                                    ref: eduRef,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "edu-bg my-4",
                                            children: "Despite my general cluelessness, I've always been curious about the world. As a kid hahaha, I loved taking things apart and pretending to know how to put them back together While my endeavors in coding and virtual photography have been underwhelming, I'm confident that my boundless enthusiasm and lack of expertise will carry me to new heights (or maybe just to the coffee shop). So if you're looking for someone who is mediocre at everything and has a knack for making bad jokes, I'm your guy!"
                                        }),
                                        educationInfo.map((edu)=>/*#__PURE__*/ jsx_runtime_.jsx(components_EduGroup, {
                                                edu: edu
                                            }, edu.id))
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_AboutBgSvg, {})
        ]
    });
};
const educationInfo = [
    {
        id: 1,
        title: "Weird Hobbies:",
        subTitle: "",
        list: [
            "Watching videos of cats eating at high speed.",
            "Reading books upside down.",
            "Listening to music with inverted headphones."
        ]
    }
];
/* harmony default export */ const sections_AboutSection = (AboutSection);


/***/ }),

/***/ 7743:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_rough_notation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9499);
/* harmony import */ var react_rough_notation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_rough_notation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var context_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1992);
/* harmony import */ var hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8909);
/* harmony import */ var hooks_useScrollActive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(331);
/* harmony import */ var _components_BlogImageCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1898);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3877);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9176);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2996);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_9__, swiper__WEBPACK_IMPORTED_MODULE_10__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_9__, swiper__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









// Import Swiper React components


// Import Swiper styles



const BlogSection = ({ posts  })=>{
    const { theme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const sectionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const elementRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const isOnScreen = (0,hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(elementRef);
    // Set active link for blog section
    const blogSection = (0,hooks_useScrollActive__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(sectionRef);
    const { onSectionChange  } = (0,context_section__WEBPACK_IMPORTED_MODULE_5__/* .useSection */ .fp)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        blogSection && onSectionChange("blog");
    }, [
        blogSection
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "bg-[#F5F5F5] dark:bg-[#1B2731]",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            ref: sectionRef,
            id: "blog",
            className: "section md:px-10",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_rough_notation__WEBPACK_IMPORTED_MODULE_4__.RoughNotation, {
                        type: "underline",
                        color: `${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`,
                        strokeWidth: 2,
                        order: 1,
                        show: isOnScreen,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "section-heading",
                            children: "Blog"
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "text-center mb-8",
                    ref: elementRef,
                    children: [
                        "I write blog posts about what I've done and what I'm doing",
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                            className: "hidden sm:block",
                            "aria-hidden": "true"
                        }),
                        "as a documenting practice. Here are some of my recent blog posts."
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_9__.Swiper, {
                            modules: [
                                swiper__WEBPACK_IMPORTED_MODULE_10__.Navigation,
                                swiper__WEBPACK_IMPORTED_MODULE_10__.Pagination
                            ],
                            pagination: {
                                dynamicBullets: true
                            },
                            wrapperTag: "ul",
                            navigation: true,
                            className: "swiper-padding-mobile xs:swiper-padding",
                            breakpoints: {
                                100: {
                                    slidesPerView: "auto",
                                    spaceBetween: 50
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                    centeredSlides: true
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                    centeredSlides: false
                                }
                            },
                            children: posts.map((post, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_9__.SwiperSlide, {
                                    tag: "li",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BlogImageCard__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        post: post,
                                        className: `${index > 3 ? "hidden lg:block" : ""}`,
                                        fullWH: true
                                    }, post.slug)
                                }, post.slug))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-4 text-center",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/blog",
                                className: "link",
                                children: [
                                    "Read all blog posts",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-6 w-6 inline-block",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: 2,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M13 7l5 5m0 0l-5 5m5-5H6"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_rough_notation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9499);
/* harmony import */ var react_rough_notation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_rough_notation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_LinkButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(407);
/* harmony import */ var context_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1992);
/* harmony import */ var hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8909);
/* harmony import */ var hooks_useScrollActive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(331);








const ContactSection = ()=>{
    const { theme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const sectionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const isSecOnScreen = (0,hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(sectionRef);
    const elementRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const isOnScreen = (0,hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(elementRef);
    // Set active link for contact section
    const contactSection = (0,hooks_useScrollActive__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(sectionRef);
    const { onSectionChange  } = (0,context_section__WEBPACK_IMPORTED_MODULE_5__/* .useSection */ .fp)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        contactSection && onSectionChange("contact");
    }, [
        contactSection
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        ref: sectionRef,
        id: "contact",
        className: "section min-h-[700px] text-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_rough_notation__WEBPACK_IMPORTED_MODULE_2__.RoughNotation, {
                    type: "underline",
                    color: `${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`,
                    strokeWidth: 2,
                    order: 1,
                    show: isOnScreen,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "text-2xl inline-block my-6 font-medium",
                        children: "Contact"
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-8 mb-20",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "font-medium text-lg mb-2 md:text-3xl",
                        ref: elementRef,
                        children: "Let's be awesome together!"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mb-6 mx-auto max-w-lg md:mb-10 lg:leading-loose",
                        children: "if you're looking for someone who is mediocre at everything and has a knack for making bad jokes, I'm your guy! don't hesitate to contact me!"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LinkButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        href: `mailto:${"lrmn.dev@gmail.com"}`,
                        children: "Get in touch!"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactSection);


/***/ }),

/***/ 4937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ sections_HeroSection)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(4287);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);
// EXTERNAL MODULE: external "gsap/dist/ScrollTrigger"
var ScrollTrigger_ = __webpack_require__(4965);
// EXTERNAL MODULE: ./components/LinkButton.tsx
var LinkButton = __webpack_require__(407);
;// CONCATENATED MODULE: ./public/lrmn-illustration.png
/* harmony default export */ const lrmn_illustration = ({"src":"/_next/static/media/lrmn-illustration.ab00ef3e.png","height":800,"width":800,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEVMaXFZWVjh4OB/U1IAAQDCwcFyXV08LzA+OjmUkI9ra2opKSjY1dXJx8fn4+MWERDq6eg/s0MvAAAAEXRSTlMAt/UUD+w5Awgi+B+FxrAW+k6oMp8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAA2SURBVAiZJctBFsAQEATRYtBDgtz/tHlMrf6mABc3lXf14MwBz19g19oMRBvDBPInpXJO3fgBJD8BHyo7mCAAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./sections/HeroSection.tsx







const HeroSection = ()=>{
    const sectionRef = (0,external_react_.useRef)(null);
    const q = external_gsap_default().utils.selector(sectionRef);
    (0,external_react_.useEffect)(()=>{
        external_gsap_default().registerPlugin(ScrollTrigger_.ScrollTrigger);
        // bg text parallax effect
        external_gsap_default().to(q(".bg-text"), {
            scrollTrigger: {
                trigger: q(".bg-text"),
                scrub: true
            },
            y: 350
        });
        // text animation after initial load
        let tl = external_gsap_default().timeline({
            defaults: {
                stagger: 0.2,
                duration: 0.3
            }
        });
        tl.fromTo(q(".text-animation"), {
            y: 100
        }, {
            y: 0,
            delay: 1
        });
        // illustration floating effect
        let imgTl = external_gsap_default().timeline({
            repeat: -1
        });
        imgTl.to(q(".image-animation"), 3, {
            y: "-=30",
            x: "+=20",
            rotation: "-=2",
            ease: "power1.easeInOut"
        }).to(q(".image-animation"), 2, {
            y: "+=30",
            x: "-=20",
            rotation: "-=2",
            ease: "power1.easeInOut"
        }).to(q(".image-animation"), 3, {
            y: "-=20",
            rotation: "+=2",
            ease: "power1.easeInOut"
        }).to(q(".image-animation"), 3, {
            y: "+=20",
            rotation: "+=2",
            ease: "power1.easeInOut"
        });
    }, [
        q
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        ref: sectionRef,
        className: "relative mt-16 sm:mt-8 pt-8 lg:pt-0 px-4 sm:px-8 md:px-20 max-w-5xl sm:pb-24 min-h-[769px] mx-auto sm:flex sm:flex-col sm:justify-center sm:items-center lg:flex-row-reverse",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                "aria-hidden": "true",
                className: "bg-text absolute -top-36 rotate-12 text-gray-100 dark:text-[#1f2e3a] text-9xl scale-150 tracking-wide font-bold select-none pointer-events-none text-center z-0",
                children: "PASSIONATE MAKING BAD JOKES"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "image-animation z-10 select-none mt-0 xs:mt-6 sm:mt-14 lg:mt-0 px-0 mx-auto lg:p-0 lg:basis-1/3",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "relative w-72 md:w-80 h-80 flex items-center mx-auto",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute pointer-events-none scale-90 xs:scale-95 mx-auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: lrmn_illustration,
                            width: 1177,
                            height: 1374,
                            priority: true,
                            id: "character-illustration",
                            "aria-label": "L RMN character illustration levitating with a Macbook",
                            alt: "Sat Naing character illustration"
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "lg:basis-2/3 z-10 relative",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-marrsgreen lg:text-lg font-medium dark:text-carrigreen",
                        children: "Hi, my name is"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "overflow-hidden",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "text-animation text-4xl md:text-5xl lg:text-7xl md:my-2 font-semibold my-1",
                            children: "L RMN"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "overflow-hidden",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "text-animation text-2xl md:text-3xl lg:text-3xl block md:my-3 text-marrsgreen dark:text-carrigreen font-medium",
                            children: [
                                "A software ",
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    children: "edgy"
                                }),
                                "neer who loves cats"
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mt-2 my-4 md:mb-8",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mb-1",
                                children: "I'm just your average person with a dabbling of coding knowledge and zero experience in virtual photography."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Enthusiastic yet mediocre, always pretending to work on projects and daydreaming about new ideas. Read books, adventures to the bed, and hanging out with barely tolerant people. Ready to reach new heights (or maybe just to the coffee shop)."
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(LinkButton/* default */.Z, {
                        href: `mailto:${"lrmn.dev@gmail.com"}`,
                        children: "Contact me!"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                href: "#whoami",
                className: "group absolute link-outline animate-bounce hidden md:bottom-14 lg:bottom-16 left-1/2 transform -translate-x-1/2 md:flex items-center flex-col",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "group-hover:text-marrsgreen dark:group-hover:text-carrigreen",
                        children: "Scroll"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        className: "dark:fill-bglight group-hover:fill-marrsgreen dark:group-hover:fill-carrigreen",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M11.975 22H12c3.859 0 7-3.14 7-7V9c0-3.841-3.127-6.974-6.981-7h-.06C8.119 2.022 5 5.157 5 9v6c0 3.86 3.129 7 6.975 7zM7 9a5.007 5.007 0 0 1 4.985-5C14.75 4.006 17 6.249 17 9v6c0 2.757-2.243 5-5 5h-.025C9.186 20 7 17.804 7 15V9z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M11 6h2v6h-2z"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        className: "dark:fill-bglight group-hover:fill-marrsgreen dark:group-hover:fill-carrigreen",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l6.707-6.707z"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const sections_HeroSection = (HeroSection);


/***/ }),

/***/ 8074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ sections_ProjectSection)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-rough-notation"
var external_react_rough_notation_ = __webpack_require__(9499);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(4287);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);
// EXTERNAL MODULE: external "gsap/dist/ScrollTrigger"
var ScrollTrigger_ = __webpack_require__(4965);
;// CONCATENATED MODULE: ./components/ProjectCard.tsx




const ProjectCard = ({ index , project  })=>{
    const sectionRef = (0,external_react_.useRef)(null);
    const even = index % 2 === 0 ? true : false;
    // Animations
    (0,external_react_.useEffect)(()=>{
        const q = external_gsap_default().utils.selector(sectionRef);
        external_gsap_default().registerPlugin(ScrollTrigger_.ScrollTrigger);
        const tl = external_gsap_default().timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: `70% bottom`
            }
        });
        tl.fromTo(q(".project-image"), {
            opacity: 0,
            y: 100
        }, {
            opacity: 1,
            y: 0,
            ease: "Power3.easeInOut",
            duration: 0.5,
            stagger: 0.2
        }).fromTo(q(".project-text"), {
            y: 100
        }, {
            y: 0,
            stagger: 0.2
        }, "<25%").fromTo(q(".project-desc"), {
            opacity: 0
        }, {
            opacity: 1,
            stagger: 0.2
        }, "<10%").fromTo(q(".project-tags"), {
            y: -40
        }, {
            y: 0,
            stagger: 0.1,
            ease: "Elastic.easeOut"
        }, "<25%");
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: sectionRef,
        className: `md:basis-1/2 md:px-8 py-2 md:py-4`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `project-card project-card-${index}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "overflow-hidden",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `project-image ${project.bgColor} relative aspect-[16/9]`,
                        children: project.image
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "overflow-hidden",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "project-text flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: " text-marrsgreen dark:text-carrigreen text-lg my-1 font-medium",
                                children: project.title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center space-x-5 sm:space-x-3 my-2 sm:my-0 mr-[0.1rem]",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: project.codeUrl,
                                        title: `See '${project.title}' on Github`,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "focus-visible:outline-marrsgreen dark:focus-visible:outline-carrigreen mr-1 rounded-full",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "24",
                                            height: "24",
                                            className: "scale-150 sm:scale-125 opacity-75 hover:-rotate-12 fill-black dark:fill-bglight",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                fillRule: "evenodd",
                                                clipRule: "evenodd",
                                                d: "M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: project.liveUrl,
                                        title: `See live demo of '${project.title}'`,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "focus-visible:outline-marrsgreen dark:focus-visible:outline-carrigreen mr-8 rounded-full",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "h-7 w-7 scale-125 sm:scale-100 bg-cardlight dark:bg-carddark hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full p-1 hover:-rotate-12",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M14 5l7 7m0 0l-7 7m7-7H3"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "overflow-hidden",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "project-desc",
                        children: project.desc
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    "aria-label": `Tech Stack used in ${project.title}`,
                    className: `flex flex-wrap mt-2 mb-4 md:mt-2 md:mb-6 text-sm overflow-hidden`,
                    children: project.tags.map((tag)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: `project-tags mr-2 my-1 bg-[#E2EFEF] dark:bg-carddark py-1 px-2 rounded`,
                            children: tag
                        }, tag))
                })
            ]
        })
    });
};
/* harmony default export */ const components_ProjectCard = (ProjectCard);

// EXTERNAL MODULE: ./context/section.tsx
var section = __webpack_require__(1992);
// EXTERNAL MODULE: ./hooks/useOnScreen.ts
var useOnScreen = __webpack_require__(8909);
// EXTERNAL MODULE: ./hooks/useScrollActive.ts
var useScrollActive = __webpack_require__(331);
;// CONCATENATED MODULE: ./public/projects/virtualphotography.png
/* harmony default export */ const virtualphotography = ({"src":"/_next/static/media/virtualphotography.d5f44268.png","height":1080,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAPFBMVEWptcIjHxd2e4F1VEhVQztfY2wxMCdudHcyMjVmanSHkJmFjpZ9gXyNblxTTD4hEAFQLBFZWl4IAABSOTCi7nprAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVQImRXIyREAIAgEsEVAwPvov1fHPIOkYRYF8Cl9ZAN8MQs1wM8V+mNbQ1PFAxlmARvYpEndAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/projects/donlod.png
/* harmony default export */ const donlod = ({"src":"/_next/static/media/donlod.832f8947.png","height":1080,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAJ1BMVEVYXWMAAAAkJSavu8dGS09CR0uptcEWFhVka3IvMTN5gYmAiZJNU1iWn4MyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKElEQVQImRXGSRIAIAwCMIp00///1yGnYGCvwDAcbCzoMJrtjJTKWx8JngCCLBJMHQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/projects/qrcode.png
/* harmony default export */ const qrcode = ({"src":"/_next/static/media/qrcode.720cdbb9.png","height":1080,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAALVBMVEUCAgdZX2gmJjBhZ3BKUViuu8YtMDcSERprcn6ptcBTVlqBi5R6g402N0hHS1MYZQbQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVQImRXIxxEAMAgDMIPpKfuPm4ueQglZshqqkwpxRJiepCMA5B/amN3dDxCLAMexELm1AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/projects/shortin.png
/* harmony default export */ const shortin = ({"src":"/_next/static/media/shortin.4eea3538.png","height":1080,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAKlBMVEVfaHQRFyOtusUoLjQJDhkbJDBSW2aAi5aotL9NVWAxOEQ5OzRweoU9RE8GRaSbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAK0lEQVQImRXIyREAIAgEsF1uUPtv1yHP4GJlYeh6DILnrkoIxkjuoCOisz4OJACqMbYjEwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/projects/quraneverything.png
/* harmony default export */ const quraneverything = ({"src":"/_next/static/media/quraneverything.af204a7c.png","height":1080,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAJFBMVEUKESBZYnBLVGBfaXUAAxOuusUzOkeptcAeJTN0f4uCjJg9RlQqrjDlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKElEQVQImUXIuREAIAwEsTXnF/rvlyFCoRiTyXaRDrgFh85G8UfrmboNTQCSOhI+qwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/projects/wahelper.png
/* harmony default export */ const wahelper = ({"src":"/_next/static/media/wahelper.0bfe8e9b.png","height":1080,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAALVBMVEVvdn0oKi1aYGceHiGsucRJUlmotL98hY1nbXU3PEVlbHRBRUovMjmHkZtjaXE9Pa8IAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALElEQVQImRXIxxEAIAwEsT2MA6n/dhnrKbKA/YJjd12rict9ickxST2MlvEBE3AAwBd35fIAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./sections/ProjectSection.tsx















const ProjectSection = ()=>{
    const { theme  } = (0,external_next_themes_.useTheme)();
    const sectionRef = (0,external_react_.useRef)(null);
    const elementRef = (0,external_react_.useRef)(null);
    const isOnScreen = (0,useOnScreen/* default */.Z)(elementRef);
    // Set active link for project section
    const projectSection = (0,useScrollActive/* default */.Z)(sectionRef);
    const { onSectionChange  } = (0,section/* useSection */.fp)();
    (0,external_react_.useEffect)(()=>{
        projectSection && onSectionChange("projects");
    }, [
        projectSection
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        ref: sectionRef,
        id: "projects",
        className: "section",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "project-title text-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_rough_notation_.RoughNotation, {
                    type: "underline",
                    color: `${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`,
                    strokeWidth: 2,
                    order: 1,
                    show: isOnScreen,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "section-heading",
                        children: "Featured Projects"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: "project-desc text-center block mb-4",
                ref: elementRef,
                children: [
                    "“Talk is cheap. Show me the code”? I got you. ",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    "Here are some of my projects you shouldn't misss"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-wrap",
                children: projects.map((project, index)=>/*#__PURE__*/ jsx_runtime_.jsx(components_ProjectCard, {
                        index: index,
                        project: project
                    }, project.title))
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "others text-center mb-16",
                children: [
                    "Other projects can be explored in",
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://github.com/lrmn7",
                        className: "font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap",
                        children: "my github profile"
                    }),
                    "",
                    " or ",
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "/blog",
                        className: "font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap",
                        children: "my blog"
                    })
                ]
            })
        ]
    });
};
const projects = [
    {
        title: "Virtual Photography",
        type: "Frontend",
        image: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            src: virtualphotography,
            sizes: "100vw",
            fill: true,
            alt: "Terminal Portfolio",
            className: "transition-transform duration-500 hover:scale-110 object-cover"
        }),
        desc: "My portfolio website in Virtual Photography. I have stories about Virtual Photography to tell, theories to share and time to write.",
        tags: [
            "Gallery",
            "Game",
            "Virtual Photography",
            "Blogs"
        ],
        liveUrl: "https://lrmn-vp.is-a.fun//",
        codeUrl: "https://github.com/lrmn7/lrmn-vp",
        bgColor: "bg-[#B4BEE0]"
    },
    {
        title: "Donlod",
        type: "Frontend",
        image: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            src: donlod,
            sizes: "100vw",
            fill: true,
            alt: "Donlod",
            className: "transition-transform duration-500 hover:scale-110 object-cover"
        }),
        desc: "Donlod is a social and media platform downloader that doesn't piss you off. Save what you love without ads, trackers, or other creepy bullshit.",
        tags: [
            "No Watermark",
            "Downloader",
            "Audio & Video",
            "Social Media"
        ],
        liveUrl: "https://donlod.hop.sh/",
        codeUrl: "https://github.com/lrmn7/donlod/",
        bgColor: "bg-[#A6CECE]"
    },
    {
        title: "QRCode Generator",
        type: "Frontend",
        image: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            src: qrcode,
            sizes: "100vw",
            fill: true,
            alt: "QRCode Generator",
            className: "transition-transform duration-500 hover:scale-110 object-cover"
        }),
        desc: "This is just a quick mini project of a QR Generator. A simple web app to generate the QR Code.",
        tags: [
            "QR Code",
            "Web App",
            "Generator"
        ],
        liveUrl: "https://qr-generator.is-a.fun/",
        codeUrl: "https://github.com/lrmn7/generator-qr/",
        bgColor: "bg-[#C5E4E7]"
    },
    {
        title: "Shortin URL",
        type: "Frontend",
        image: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            src: shortin,
            sizes: "100vw",
            fill: true,
            alt: "Shortin URL",
            className: "transition-transform duration-500 hover:scale-110 object-cover"
        }),
        desc: "Personalized link shortner. (Made using tinyurl API).",
        tags: [
            "Shortner",
            "Shortin",
            "Tinyurl",
            "Web App"
        ],
        liveUrl: "https://shortin.is-a.fun/",
        codeUrl: "https://github.com/lrmn7/shortin-isafun/",
        bgColor: "bg-[#9FD0E3]"
    },
    {
        title: "Quran Everything",
        type: "Frontend",
        image: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            src: quraneverything,
            sizes: "100vw",
            fill: true,
            alt: "Quran Everything",
            className: "transition-transform duration-500 hover:scale-110 object-cover"
        }),
        desc: "Quran Everything is a website that provides prayer schedules, the 99 Names of Allah (Asma'ul Husna), and the ability to read the Quran.",
        tags: [
            "Al-Quran",
            "Translate",
            "Audio",
            "Salat times"
        ],
        liveUrl: "https://quran-everything.is-a.fun/",
        codeUrl: "https://github.com/lrmn7/quran-everything/",
        bgColor: "bg-[#9FD0E3]"
    },
    {
        title: "Whatsapp Helper",
        type: "Frontend",
        image: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            src: wahelper,
            sizes: "100vw",
            fill: true,
            alt: "Whatsapp Helper",
            className: "transition-transform duration-500 hover:scale-110 object-cover"
        }),
        desc: "Just a simple web app to help you initiate and send the WhatsApp chat without saving the phone number.",
        tags: [
            "Whatsapp",
            "Web App",
            "Wa Helper"
        ],
        liveUrl: "https://quran-everything.is-a.fun/",
        codeUrl: "https://github.com/lrmn7/quran-everything/",
        bgColor: "bg-[#9FD0E3]"
    }
];
/* harmony default export */ const sections_ProjectSection = (ProjectSection);


/***/ }),

/***/ 9176:
/***/ (() => {



/***/ }),

/***/ 2996:
/***/ (() => {



/***/ }),

/***/ 8722:
/***/ (() => {



/***/ })

};
;