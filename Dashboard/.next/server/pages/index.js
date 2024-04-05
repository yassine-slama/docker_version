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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/api/profile.js":
/*!******************************!*\
  !*** ./pages/api/profile.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchProfile\": () => (/* binding */ fetchProfile)\n/* harmony export */ });\nasync function fetchProfile(token) {\n    const res = await fetch(\"http://localhost:3030\" + `/auth/get-info`, {\n        method: \"GET\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n            \"Authorization\": token\n        }\n    });\n    if (res.ok) {\n        const json = await res.json();\n        return json;\n    } else {\n        throw new Error(\"Failed to fetch user profile\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcHJvZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQ08sZUFBZUEsYUFBYUMsS0FBSyxFQUFFO0lBQ3RDLE1BQU1DLE1BQU0sTUFBTUMsTUFBTUMsdUJBQWdDLEdBQUMsQ0FBQyxjQUFjLENBQUMsRUFBRTtRQUN6RUcsUUFBUTtRQUNSQyxTQUFTO1lBQ1AsZ0JBQWdCO1lBQ2hCLGlCQUFpQlA7UUFDbkI7SUFDRjtJQUNBLElBQUlDLElBQUlPLEVBQUUsRUFBRTtRQUNWLE1BQU1DLE9BQU8sTUFBTVIsSUFBSVEsSUFBSTtRQUMzQixPQUFPQTtJQUNULE9BQU87UUFDTCxNQUFNLElBQUlDLE1BQU0sZ0NBQWdDO0lBQ2xELENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWRtaW4tZGFzaGJvYXJkLy4vcGFnZXMvYXBpL3Byb2ZpbGUuanM/MTZjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFByb2ZpbGUodG9rZW4pIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TSVRFX1VSTCtgL2F1dGgvZ2V0LWluZm9gLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IHRva2VuXG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHJlcy5vaykge1xuICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICByZXR1cm4ganNvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHVzZXIgcHJvZmlsZVwiKTtcbiAgICB9XG4gIH1cbiAgIl0sIm5hbWVzIjpbImZldGNoUHJvZmlsZSIsInRva2VuIiwicmVzIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU0lURV9VUkwiLCJtZXRob2QiLCJoZWFkZXJzIiwib2siLCJqc29uIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/profile.js\n");

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Root)\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_profile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/profile.js */ \"./pages/api/profile.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Root() {\n    const [profile, setProfile] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        router.push(\"/dashboard\");\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const token = localStorage.getItem(\"token\");\n        if (token) {\n            (0,_api_profile_js__WEBPACK_IMPORTED_MODULE_1__.fetchProfile)(token).then((data)=>setProfile(data)).catch((err)=>{\n                console.error(err);\n                router.push(\"/login\");\n            });\n        } else {\n            router.push(\"/login\");\n        }\n    }, [\n        router\n    ]);\n    return null;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3dDO0FBQ1E7QUFDSjtBQUU3QixTQUFTSSxPQUFPO0lBRTlCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQzFDLE1BQU1LLFNBQVNQLHNEQUFTQTtJQUd4QkcsZ0RBQVNBLENBQUMsSUFBTTtRQUNkSSxPQUFPQyxJQUFJLENBQUM7SUFDZCxHQUFHLEVBQUU7SUFFTEwsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1NLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQztRQUNuQyxJQUFJRixPQUFPO1lBQ1RSLDZEQUFZQSxDQUFDUSxPQUNWRyxJQUFJLENBQUNDLENBQUFBLE9BQVFQLFdBQVdPLE9BQ3hCQyxLQUFLLENBQUNDLENBQUFBLE1BQU87Z0JBQ1pDLFFBQVFDLEtBQUssQ0FBQ0Y7Z0JBQ2RSLE9BQU9DLElBQUksQ0FBQztZQUNkO1FBQ0osT0FBTztZQUNMRCxPQUFPQyxJQUFJLENBQUM7UUFDZCxDQUFDO0lBQ0gsR0FBRztRQUFDRDtLQUFPO0lBRVgsT0FBTyxJQUFJO0FBQ2IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FkbWluLWRhc2hib2FyZC8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBmZXRjaFByb2ZpbGUgfSBmcm9tICcuL2FwaS9wcm9maWxlLmpzJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvb3QoKSB7XG5cbiBjb25zdCBbcHJvZmlsZSwgc2V0UHJvZmlsZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgZmV0Y2hQcm9maWxlKHRva2VuKVxuICAgICAgICAudGhlbihkYXRhID0+IHNldFByb2ZpbGUoZGF0YSkpXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICAgIH1cbiAgfSwgW3JvdXRlcl0pO1xuXG4gIHJldHVybiBudWxsO1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsImZldGNoUHJvZmlsZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUm9vdCIsInByb2ZpbGUiLCJzZXRQcm9maWxlIiwicm91dGVyIiwicHVzaCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRoZW4iLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();