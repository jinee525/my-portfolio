"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/callsites";
exports.ids = ["vendor-chunks/callsites"];
exports.modules = {

/***/ "(ssr)/./node_modules/callsites/index.js":
/*!*****************************************!*\
  !*** ./node_modules/callsites/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("\n\nconst callsites = () => {\n\tconst _prepareStackTrace = Error.prepareStackTrace;\n\tError.prepareStackTrace = (_, stack) => stack;\n\tconst stack = new Error().stack.slice(1);\n\tError.prepareStackTrace = _prepareStackTrace;\n\treturn stack;\n};\n\nmodule.exports = callsites;\n// TODO: Remove this for the next major release\nmodule.exports[\"default\"] = callsites;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY2FsbHNpdGVzL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBc0IiLCJzb3VyY2VzIjpbIi9Vc2Vycy95dWppbi9EZXNrdG9wL2dpdGh1Yi9teS1wb3J0Zm9saW8vbm9kZV9tb2R1bGVzL2NhbGxzaXRlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNhbGxzaXRlcyA9ICgpID0+IHtcblx0Y29uc3QgX3ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7XG5cdEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gKF8sIHN0YWNrKSA9PiBzdGFjaztcblx0Y29uc3Qgc3RhY2sgPSBuZXcgRXJyb3IoKS5zdGFjay5zbGljZSgxKTtcblx0RXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBfcHJlcGFyZVN0YWNrVHJhY2U7XG5cdHJldHVybiBzdGFjaztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY2FsbHNpdGVzO1xuLy8gVE9ETzogUmVtb3ZlIHRoaXMgZm9yIHRoZSBuZXh0IG1ham9yIHJlbGVhc2Vcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBjYWxsc2l0ZXM7XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/callsites/index.js\n");

/***/ })

};
;