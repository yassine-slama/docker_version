"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/dashboard";
exports.ids = ["pages/dashboard"];
exports.modules = {

/***/ "./pages/api/profile.js":
/*!******************************!*\
  !*** ./pages/api/profile.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchProfile\": () => (/* binding */ fetchProfile)\n/* harmony export */ });\nasync function fetchProfile(token) {\n    const res = await fetch(\"http://localhost:3030\" + `/auth/get-info`, {\n        method: \"GET\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n            \"Authorization\": token\n        }\n    });\n    if (res.ok) {\n        const json = await res.json();\n        return json;\n    } else {\n        throw new Error(\"Failed to fetch user profile\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcHJvZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQ08sZUFBZUEsYUFBYUMsS0FBSyxFQUFFO0lBQ3RDLE1BQU1DLE1BQU0sTUFBTUMsTUFBTUMsdUJBQWdDLEdBQUMsQ0FBQyxjQUFjLENBQUMsRUFBRTtRQUN6RUcsUUFBUTtRQUNSQyxTQUFTO1lBQ1AsZ0JBQWdCO1lBQ2hCLGlCQUFpQlA7UUFDbkI7SUFDRjtJQUNBLElBQUlDLElBQUlPLEVBQUUsRUFBRTtRQUNWLE1BQU1DLE9BQU8sTUFBTVIsSUFBSVEsSUFBSTtRQUMzQixPQUFPQTtJQUNULE9BQU87UUFDTCxNQUFNLElBQUlDLE1BQU0sZ0NBQWdDO0lBQ2xELENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWRtaW4tZGFzaGJvYXJkLy4vcGFnZXMvYXBpL3Byb2ZpbGUuanM/MTZjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFByb2ZpbGUodG9rZW4pIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TSVRFX1VSTCtgL2F1dGgvZ2V0LWluZm9gLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IHRva2VuXG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHJlcy5vaykge1xuICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICByZXR1cm4ganNvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHVzZXIgcHJvZmlsZVwiKTtcbiAgICB9XG4gIH1cbiAgIl0sIm5hbWVzIjpbImZldGNoUHJvZmlsZSIsInRva2VuIiwicmVzIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU0lURV9VUkwiLCJtZXRob2QiLCJoZWFkZXJzIiwib2siLCJqc29uIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/profile.js\n");

/***/ }),

/***/ "./pages/dashboard.jsx":
/*!*****************************!*\
  !*** ./pages/dashboard.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_profile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/profile.js */ \"./pages/api/profile.js\");\n/* harmony import */ var next_image_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image.js */ \"next/image.js\");\n/* harmony import */ var next_image_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var primereact_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primereact/divider */ \"primereact/divider\");\n/* harmony import */ var primereact_divider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primereact_divider__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var primereact_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primereact/card */ \"primereact/card\");\n/* harmony import */ var primereact_card__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primereact_card__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nfunction Home() {\n    const [profile, setProfile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const token = localStorage.getItem(\"token\");\n        if (token) {\n            (0,_api_profile_js__WEBPACK_IMPORTED_MODULE_3__.fetchProfile)(token).then((data)=>setProfile(data)).catch((err)=>{\n                console.error(err);\n                router.push(\"/login\");\n            });\n        } else {\n            router.push(\"/login\");\n        }\n    }, [\n        router\n    ]);\n    if (!profile) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Yassine\\\\Desktop\\\\projet\\\\Dashboard\\\\pages\\\\dashboard.jsx\",\n            lineNumber: 30,\n            columnNumber: 12\n        }, this);\n    }\n    const header = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image_js__WEBPACK_IMPORTED_MODULE_4___default()), {\n            alt: \"Card\",\n            src: \"/avatar-08.png\",\n            width: 300,\n            height: 300,\n            style: {\n                width: \"25%\"\n            }\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Yassine\\\\Desktop\\\\projet\\\\Dashboard\\\\pages\\\\dashboard.jsx\",\n            lineNumber: 35,\n            columnNumber: 12\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Yassine\\\\Desktop\\\\projet\\\\Dashboard\\\\pages\\\\dashboard.jsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gray-100 min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between px-4 pt-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"font-bold text-3xl\",\n                    children: \"Home Panel\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Yassine\\\\Desktop\\\\projet\\\\Dashboard\\\\pages\\\\dashboard.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Yassine\\\\Desktop\\\\projet\\\\Dashboard\\\\pages\\\\dashboard.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Yassine\\\\Desktop\\\\projet\\\\Dashboard\\\\pages\\\\dashboard.jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card flex justify-content-center text-center\",\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    alignItems: \"center\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_card__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                    title: profile.fullname,\n                    header: header,\n                    className: \"md:w-25rem\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_divider__WEBPACK_IMPORTED_MODULE_5__.Divider, {\n                            type: \"solid\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Yassine\\\\Desktop\\\\projet\\\\Dashboard\\\\pages\\\\dashboard.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-bold m-0\",\n                            children: \"Welcome Back to your Admin Panel !\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Yassine\\\\Desktop\\\\projet\\\\Dashboard\\\\pages\\\\dashboard.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_divider__WEBPACK_IMPORTED_MODULE_5__.Divider, {\n                            type: \"solid\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Yassine\\\\Desktop\\\\projet\\\\Dashboard\\\\pages\\\\dashboard.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"m-0\",\n                            children: \"LoggedIn Profile :\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Yassine\\\\Desktop\\\\projet\\\\Dashboard\\\\pages\\\\dashboard.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"font-bold text-2xl\",\n                            children: [\n                                \"  \",\n                                profile.email\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Yassine\\\\Desktop\\\\projet\\\\Dashboard\\\\pages\\\\dashboard.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_divider__WEBPACK_IMPORTED_MODULE_5__.Divider, {\n                            type: \"solid\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Yassine\\\\Desktop\\\\projet\\\\Dashboard\\\\pages\\\\dashboard.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Yassine\\\\Desktop\\\\projet\\\\Dashboard\\\\pages\\\\dashboard.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Yassine\\\\Desktop\\\\projet\\\\Dashboard\\\\pages\\\\dashboard.jsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Yassine\\\\Desktop\\\\projet\\\\Dashboard\\\\pages\\\\dashboard.jsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDa0I7QUFDSjtBQUVRO0FBQ2Q7QUFFVTtBQUNMO0FBRXhCLFNBQVNRLE9BQU87SUFDN0IsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFDLElBQUk7SUFDM0MsTUFBTVUsU0FBU1Isc0RBQVNBO0lBRXhCRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTVUsUUFBUUMsYUFBYUMsT0FBTyxDQUFDO1FBQ25DLElBQUlGLE9BQU87WUFDVFIsNkRBQVlBLENBQUNRLE9BQ1ZHLElBQUksQ0FBQ0MsQ0FBQUEsT0FBUU4sV0FBV00sT0FDeEJDLEtBQUssQ0FBQ0MsQ0FBQUEsTUFBTztnQkFDWkMsUUFBUUMsS0FBSyxDQUFDRjtnQkFDZFAsT0FBT1UsSUFBSSxDQUFDO1lBQ2Q7UUFDSixPQUFPO1lBQ0xWLE9BQU9VLElBQUksQ0FBQztRQUNkLENBQUM7SUFDSCxHQUFHO1FBQUNWO0tBQU87SUFFWCxJQUFJLENBQUNGLFNBQVM7UUFDWixxQkFBTyw4REFBQ2E7c0JBQUk7Ozs7OztJQUNkLENBQUM7SUFFRyxNQUFNQyx1QkFDSiw4REFBQ0Q7UUFBSUUsT0FBTztZQUFFQyxTQUFTO1lBQVFDLGdCQUFnQjtZQUFVQyxZQUFZO1FBQVM7a0JBQzNFLDRFQUFDdEIsc0RBQUtBO1lBQUN1QixLQUFJO1lBQU9DLEtBQUk7WUFBaUJDLE9BQU87WUFBS0MsUUFBUTtZQUFLUCxPQUFPO2dCQUFFTSxPQUFPO1lBQU07Ozs7Ozs7Ozs7O0lBSy9GLHFCQUNFLDhEQUFDUjtRQUFJVSxXQUFVOzswQkFDYiw4REFBQ1Y7Z0JBQUlVLFdBQVU7MEJBQ1gsNEVBQUNDO29CQUFHRCxXQUFVOzhCQUFxQjs7Ozs7Ozs7Ozs7MEJBRXZDLDhEQUFDRTs7Ozs7MEJBRUMsOERBQUNaO2dCQUFJVSxXQUFVO2dCQUErQ1IsT0FBTztvQkFBRUMsU0FBUztvQkFBUUMsZ0JBQWdCO29CQUFVQyxZQUFZO2dCQUFTOzBCQUNuSSw0RUFBQ3BCLGlEQUFJQTtvQkFBRTRCLE9BQU8xQixRQUFRMkIsUUFBUTtvQkFBa0NiLFFBQVFBO29CQUFRUyxXQUFVOztzQ0FFeEYsOERBQUMxQix1REFBT0E7NEJBQUMrQixNQUFLOzs7Ozs7c0NBQ1osOERBQUNDOzRCQUFFTixXQUFVO3NDQUFnQjs7Ozs7O3NDQUcvQiw4REFBQzFCLHVEQUFPQTs0QkFBQytCLE1BQUs7Ozs7OztzQ0FFZCw4REFBQ0M7NEJBQUVOLFdBQVU7c0NBQU07Ozs7OztzQ0FJakIsOERBQUNPOzRCQUFHUCxXQUFVOztnQ0FBcUI7Z0NBQUd2QixRQUFRK0IsS0FBSzs7Ozs7OztzQ0FFckQsOERBQUNsQyx1REFBT0E7NEJBQUMrQixNQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVM1QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWRtaW4tZGFzaGJvYXJkLy4vcGFnZXMvZGFzaGJvYXJkLmpzeD9hMzU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCB7IGZldGNoUHJvZmlsZSB9IGZyb20gJy4vYXBpL3Byb2ZpbGUuanMnO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlLmpzXCI7XG5cbmltcG9ydCB7IERpdmlkZXIgfSBmcm9tICdwcmltZXJlYWN0L2RpdmlkZXInXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAncHJpbWVyZWFjdC9jYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3Byb2ZpbGUsIHNldFByb2ZpbGVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgZmV0Y2hQcm9maWxlKHRva2VuKVxuICAgICAgICAudGhlbihkYXRhID0+IHNldFByb2ZpbGUoZGF0YSkpXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICAgIH1cbiAgfSwgW3JvdXRlcl0pO1xuXG4gIGlmICghcHJvZmlsZSkge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cblxuICAgICAgY29uc3QgaGVhZGVyID0gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgPEltYWdlIGFsdD1cIkNhcmRcIiBzcmM9XCIvYXZhdGFyLTA4LnBuZ1wiIHdpZHRoPXszMDB9IGhlaWdodD17MzAwfSBzdHlsZT17eyB3aWR0aDogJzI1JScgfX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2JnLWdyYXktMTAwIG1pbi1oLXNjcmVlbicgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuIHB4LTQgcHQtNCc+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTN4bFwiPkhvbWUgUGFuZWw8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnI+PC9icj5cbiAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyXCIgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgPENhcmQgIHRpdGxlPXtwcm9maWxlLmZ1bGxuYW1lfSAvKnN1YlRpdGxlPXtwcm9maWxlLmZ1bGxuYW1lfSovIGhlYWRlcj17aGVhZGVyfSBjbGFzc05hbWU9XCJtZDp3LTI1cmVtXCI+XG5cbiAgICAgICAgICAgICAgPERpdmlkZXIgdHlwZT1cInNvbGlkXCIgLz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgbS0wXCI+XG4gICAgICAgICAgICAgICAgV2VsY29tZSBCYWNrIHRvIHlvdXIgQWRtaW4gUGFuZWwgIVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPERpdmlkZXIgdHlwZT1cInNvbGlkXCIgLz5cblxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTBcIj5cbiAgICAgICAgICAgICAgIExvZ2dlZEluIFByb2ZpbGUgOlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtMnhsXCI+ICB7cHJvZmlsZS5lbWFpbH08L2gzPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPERpdmlkZXIgdHlwZT1cInNvbGlkXCIgLz5cblxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJmZXRjaFByb2ZpbGUiLCJJbWFnZSIsIkRpdmlkZXIiLCJDYXJkIiwiSG9tZSIsInByb2ZpbGUiLCJzZXRQcm9maWxlIiwicm91dGVyIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidGhlbiIsImRhdGEiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInB1c2giLCJkaXYiLCJoZWFkZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJhbHQiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImNsYXNzTmFtZSIsImgxIiwiYnIiLCJ0aXRsZSIsImZ1bGxuYW1lIiwidHlwZSIsInAiLCJoMyIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dashboard.jsx\n");

/***/ }),

/***/ "next/image.js":
/*!********************************!*\
  !*** external "next/image.js" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("next/image.js");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "primereact/card":
/*!**********************************!*\
  !*** external "primereact/card" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("primereact/card");

/***/ }),

/***/ "primereact/divider":
/*!*************************************!*\
  !*** external "primereact/divider" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("primereact/divider");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/dashboard.jsx"));
module.exports = __webpack_exports__;

})();