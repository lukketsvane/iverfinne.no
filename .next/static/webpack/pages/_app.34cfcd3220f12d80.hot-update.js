"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_font_google_target_css_path_pages_app_tsx_import_Lora_arguments_subsets_latin_display_swap_variableName_lora___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @next/font/google/target.css?{\"path\":\"pages/_app.tsx\",\"import\":\"Lora\",\"arguments\":[{\"subsets\":[\"latin\"],\"display\":\"swap\"}],\"variableName\":\"lora\"} */ \"./node_modules/@next/font/google/target.css?{\\\"path\\\":\\\"pages/_app.tsx\\\",\\\"import\\\":\\\"Lora\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"display\\\":\\\"swap\\\"}],\\\"variableName\\\":\\\"lora\\\"}\");\n/* harmony import */ var _next_font_google_target_css_path_pages_app_tsx_import_Lora_arguments_subsets_latin_display_swap_variableName_lora___WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_next_font_google_target_css_path_pages_app_tsx_import_Lora_arguments_subsets_latin_display_swap_variableName_lora___WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _nikolovlazar_chakra_ui_prose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nikolovlazar/chakra-ui-prose */ \"./node_modules/@nikolovlazar/chakra-ui-prose/dist/index.mjs\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ \"./node_modules/next-seo/lib/next-seo.module.js\");\n/* harmony import */ var posthog_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! posthog-js */ \"./node_modules/posthog-js/dist/es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.extendTheme)({\n    fonts: {\n        heading: (_next_font_google_target_css_path_pages_app_tsx_import_Lora_arguments_subsets_latin_display_swap_variableName_lora___WEBPACK_IMPORTED_MODULE_7___default().style.fontFamily),\n        body: (_next_font_google_target_css_path_pages_app_tsx_import_Lora_arguments_subsets_latin_display_swap_variableName_lora___WEBPACK_IMPORTED_MODULE_7___default().style.fontFamily)\n    }\n}, (0,_nikolovlazar_chakra_ui_prose__WEBPACK_IMPORTED_MODULE_8__.withProse)({\n    baseStyle: {\n        \"h1, h2, h3, h4, h5, h6\": {\n            mt: 4,\n            mb: 4\n        },\n        p: {\n            my: 3\n        },\n        a: {\n            color: \"blue.500\"\n        }\n    }\n}));\nconst getDefaultLayout = (page)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nikolovlazar_chakra_ui_prose__WEBPACK_IMPORTED_MODULE_8__.Prose, {\n            children: page\n        }, void 0, false, {\n            fileName: \"/workspaces/codespaces-blank/pages/_app.tsx\",\n            lineNumber: 39,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/workspaces/codespaces-blank/pages/_app.tsx\",\n        lineNumber: 38,\n        columnNumber: 3\n    }, undefined);\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const getLayout = Component.getLayout || getDefaultLayout;\n    react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(()=>{\n        posthog_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].init(\"phc_jFlJqpi333LZJJRxwjiFTkKI2Ufv3Pgf0hnbrPuZdLL\", {\n            api_host: \"https://app.posthog.com\"\n        });\n        const handleRouteChange = ()=>posthog_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].capture(\"$pageview\");\n        router.events.on(\"routeChangeComplete\", handleRouteChange);\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", handleRouteChange);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ChakraProvider, {\n        theme: theme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_2__.DefaultSeo, {\n                title: \"Iver Finne\",\n                description: \"I'm a constant learner and aspiring technical generalist. I'm also a founding enginer at thirdweb and on gap year from the University of Pennsylvania.\",\n                openGraph: {\n                    title: \"Iver Finne\",\n                    description: \"I'm a constant learner and aspiring technical generalist. I'm also a founding enginer at thirdweb and on gap year from the University of Pennsylvania.\",\n                    images: [\n                        {\n                            url: \"https://adammaj.com/og-image-dark.jpg\",\n                            type: \"image/jpeg\"\n                        }\n                    ],\n                    siteName: \"Iver Finne\"\n                }\n            }, void 0, false, {\n                fileName: \"/workspaces/codespaces-blank/pages/_app.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            getLayout(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/workspaces/codespaces-blank/pages/_app.tsx\",\n                lineNumber: 78,\n                columnNumber: 18\n            }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/codespaces-blank/pages/_app.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQVdNQTtBQVZ5RDtBQUNFO0FBQ3ZCO0FBRUo7QUFDTDtBQUNQO0FBQ2M7QUFLeEMsTUFBTVUsUUFBUVIsNkRBQVdBLENBQ3ZCO0lBQ0VTLE9BQU87UUFDTEMsU0FBU1osNktBQXFCO1FBQzlCZSxNQUFNZiw2S0FBcUI7SUFDN0I7QUFDRixHQUNBSSx3RUFBU0EsQ0FBQztJQUNSWSxXQUFXO1FBQ1QsMEJBQTBCO1lBQ3hCQyxJQUFJO1lBQ0pDLElBQUk7UUFDTjtRQUNBQyxHQUFHO1lBQ0RDLElBQUk7UUFDTjtRQUNBQyxHQUFHO1lBQ0RDLE9BQU87UUFDVDtJQUNGO0FBQ0Y7QUFHRixNQUFNQyxtQkFBbUIsQ0FBQ0MscUJBQ3hCLDhEQUFDbkIsMERBQU1BO2tCQUNMLDRFQUFDRixnRUFBS0E7c0JBQUVxQjs7Ozs7Ozs7Ozs7QUFJRyxTQUFTQyxJQUFJLEtBQWtDLEVBQUU7UUFBcEMsRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQVksR0FBbEM7O0lBQzFCLE1BQU1DLFNBQVNuQixzREFBU0E7SUFDeEIsTUFBTW9CLFlBQVlILFVBQVVHLFNBQVMsSUFBSU47SUFFekNmLHNEQUFlLENBQUMsSUFBTTtRQUNwQkQsdURBQVksQ0FBQyxtREFBbUQ7WUFDOUR5QixVQUFVO1FBQ1o7UUFFQSxNQUFNQyxvQkFBb0IsSUFBTTFCLDBEQUFlLENBQUM7UUFDaERxQixPQUFPTyxNQUFNLENBQUNDLEVBQUUsQ0FBQyx1QkFBdUJIO1FBRXhDLE9BQU8sSUFBTTtZQUNYTCxPQUFPTyxNQUFNLENBQUNFLEdBQUcsQ0FBQyx1QkFBdUJKO1FBQzNDO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNoQyw0REFBY0E7UUFBQ1MsT0FBT0E7OzBCQUNyQiw4REFBQ0osZ0RBQVVBO2dCQUNUZ0MsT0FBTTtnQkFDTkMsYUFBWTtnQkFDWkMsV0FBVztvQkFDVEYsT0FBTztvQkFDUEMsYUFDRTtvQkFDRkUsUUFBUTt3QkFDTjs0QkFDRUMsS0FBSzs0QkFDTEMsTUFBTTt3QkFDUjtxQkFDRDtvQkFDREMsVUFBVTtnQkFDWjs7Ozs7O1lBRURmLHdCQUFVLDhEQUFDSDtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7QUFHekMsQ0FBQztHQXRDdUJGOztRQUNQaEIsa0RBQVNBOzs7S0FERmdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIsIGV4dGVuZFRoZW1lIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IFByb3NlLCB3aXRoUHJvc2UgfSBmcm9tIFwiQG5pa29sb3ZsYXphci9jaGFrcmEtdWktcHJvc2VcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBSZWFjdEVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IERlZmF1bHRTZW8gfSBmcm9tIFwibmV4dC1zZW9cIjtcbmltcG9ydCBwb3N0aG9nIGZyb20gXCJwb3N0aG9nLWpzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IExvcmEgfSBmcm9tIFwiQG5leHQvZm9udC9nb29nbGVcIjtcblxuY29uc3QgbG9yYSA9IExvcmEoeyBzdWJzZXRzOiBbXCJsYXRpblwiXSwgZGlzcGxheTogXCJzd2FwXCIgfSk7XG5cbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoXG4gIHtcbiAgICBmb250czoge1xuICAgICAgaGVhZGluZzogbG9yYS5zdHlsZS5mb250RmFtaWx5LFxuICAgICAgYm9keTogbG9yYS5zdHlsZS5mb250RmFtaWx5LFxuICAgIH0sXG4gIH0sXG4gIHdpdGhQcm9zZSh7XG4gICAgYmFzZVN0eWxlOiB7XG4gICAgICBcImgxLCBoMiwgaDMsIGg0LCBoNSwgaDZcIjoge1xuICAgICAgICBtdDogNCxcbiAgICAgICAgbWI6IDQsXG4gICAgICB9LFxuICAgICAgcDoge1xuICAgICAgICBteTogMyxcbiAgICAgIH0sXG4gICAgICBhOiB7XG4gICAgICAgIGNvbG9yOiBcImJsdWUuNTAwXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG4pO1xuXG5jb25zdCBnZXREZWZhdWx0TGF5b3V0ID0gKHBhZ2U6IFJlYWN0RWxlbWVudCkgPT4gKFxuICA8TGF5b3V0PlxuICAgIDxQcm9zZT57cGFnZX08L1Byb3NlPlxuICA8L0xheW91dD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBnZXRMYXlvdXQgPSBDb21wb25lbnQuZ2V0TGF5b3V0IHx8IGdldERlZmF1bHRMYXlvdXQ7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBwb3N0aG9nLmluaXQoXCJwaGNfakZsSnFwaTMzM0xaSkpSeHdqaUZUa0tJMlVmdjNQZ2YwaG5iclB1WmRMTFwiLCB7XG4gICAgICBhcGlfaG9zdDogXCJodHRwczovL2FwcC5wb3N0aG9nLmNvbVwiLFxuICAgIH0pO1xuXG4gICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAoKSA9PiBwb3N0aG9nLmNhcHR1cmUoXCIkcGFnZXZpZXdcIik7XG4gICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgaGFuZGxlUm91dGVDaGFuZ2UpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8RGVmYXVsdFNlb1xuICAgICAgICB0aXRsZT1cIkl2ZXIgRmlubmVcIlxuICAgICAgICBkZXNjcmlwdGlvbj1cIkknbSBhIGNvbnN0YW50IGxlYXJuZXIgYW5kIGFzcGlyaW5nIHRlY2huaWNhbCBnZW5lcmFsaXN0LiBJJ20gYWxzbyBhIGZvdW5kaW5nIGVuZ2luZXIgYXQgdGhpcmR3ZWIgYW5kIG9uIGdhcCB5ZWFyIGZyb20gdGhlIFVuaXZlcnNpdHkgb2YgUGVubnN5bHZhbmlhLlwiXG4gICAgICAgIG9wZW5HcmFwaD17e1xuICAgICAgICAgIHRpdGxlOiBcIkl2ZXIgRmlubmVcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiSSdtIGEgY29uc3RhbnQgbGVhcm5lciBhbmQgYXNwaXJpbmcgdGVjaG5pY2FsIGdlbmVyYWxpc3QuIEknbSBhbHNvIGEgZm91bmRpbmcgZW5naW5lciBhdCB0aGlyZHdlYiBhbmQgb24gZ2FwIHllYXIgZnJvbSB0aGUgVW5pdmVyc2l0eSBvZiBQZW5uc3lsdmFuaWEuXCIsXG4gICAgICAgICAgaW1hZ2VzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHVybDogXCJodHRwczovL2FkYW1tYWouY29tL29nLWltYWdlLWRhcmsuanBnXCIsXG4gICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvanBlZ1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHNpdGVOYW1lOiBcIkl2ZXIgRmlubmVcIixcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICB7Z2V0TGF5b3V0KDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz4pfVxuICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsibG9yYSIsIkNoYWtyYVByb3ZpZGVyIiwiZXh0ZW5kVGhlbWUiLCJQcm9zZSIsIndpdGhQcm9zZSIsIkxheW91dCIsIkRlZmF1bHRTZW8iLCJwb3N0aG9nIiwiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJ0aGVtZSIsImZvbnRzIiwiaGVhZGluZyIsInN0eWxlIiwiZm9udEZhbWlseSIsImJvZHkiLCJiYXNlU3R5bGUiLCJtdCIsIm1iIiwicCIsIm15IiwiYSIsImNvbG9yIiwiZ2V0RGVmYXVsdExheW91dCIsInBhZ2UiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJnZXRMYXlvdXQiLCJ1c2VFZmZlY3QiLCJpbml0IiwiYXBpX2hvc3QiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsImNhcHR1cmUiLCJldmVudHMiLCJvbiIsIm9mZiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJvcGVuR3JhcGgiLCJpbWFnZXMiLCJ1cmwiLCJ0eXBlIiwic2l0ZU5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});