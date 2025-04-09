"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/parent-module";
exports.ids = ["vendor-chunks/parent-module"];
exports.modules = {

/***/ "(ssr)/./node_modules/parent-module/index.js":
/*!*********************************************!*\
  !*** ./node_modules/parent-module/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst callsites = __webpack_require__(/*! callsites */ \"(ssr)/./node_modules/callsites/index.js\");\n\nmodule.exports = filepath => {\n\tconst stacks = callsites();\n\n\tif (!filepath) {\n\t\treturn stacks[2].getFileName();\n\t}\n\n\tlet seenVal = false;\n\n\t// Skip the first stack as it's this function\n\tstacks.shift();\n\n\tfor (const stack of stacks) {\n\t\tconst parentFilepath = stack.getFileName();\n\n\t\tif (typeof parentFilepath !== 'string') {\n\t\t\tcontinue;\n\t\t}\n\n\t\tif (parentFilepath === filepath) {\n\t\t\tseenVal = true;\n\t\t\tcontinue;\n\t\t}\n\n\t\t// Skip native modules\n\t\tif (parentFilepath === 'module.js') {\n\t\t\tcontinue;\n\t\t}\n\n\t\tif (seenVal && parentFilepath !== filepath) {\n\t\t\treturn parentFilepath;\n\t\t}\n\t}\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcGFyZW50LW1vZHVsZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLGtCQUFrQixtQkFBTyxDQUFDLDBEQUFXOztBQUVyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi9Vc2Vycy95dWppbi9EZXNrdG9wL2dpdGh1Yi9teS1wb3J0Zm9saW8vbm9kZV9tb2R1bGVzL3BhcmVudC1tb2R1bGUvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuY29uc3QgY2FsbHNpdGVzID0gcmVxdWlyZSgnY2FsbHNpdGVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZmlsZXBhdGggPT4ge1xuXHRjb25zdCBzdGFja3MgPSBjYWxsc2l0ZXMoKTtcblxuXHRpZiAoIWZpbGVwYXRoKSB7XG5cdFx0cmV0dXJuIHN0YWNrc1syXS5nZXRGaWxlTmFtZSgpO1xuXHR9XG5cblx0bGV0IHNlZW5WYWwgPSBmYWxzZTtcblxuXHQvLyBTa2lwIHRoZSBmaXJzdCBzdGFjayBhcyBpdCdzIHRoaXMgZnVuY3Rpb25cblx0c3RhY2tzLnNoaWZ0KCk7XG5cblx0Zm9yIChjb25zdCBzdGFjayBvZiBzdGFja3MpIHtcblx0XHRjb25zdCBwYXJlbnRGaWxlcGF0aCA9IHN0YWNrLmdldEZpbGVOYW1lKCk7XG5cblx0XHRpZiAodHlwZW9mIHBhcmVudEZpbGVwYXRoICE9PSAnc3RyaW5nJykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKHBhcmVudEZpbGVwYXRoID09PSBmaWxlcGF0aCkge1xuXHRcdFx0c2VlblZhbCA9IHRydWU7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBTa2lwIG5hdGl2ZSBtb2R1bGVzXG5cdFx0aWYgKHBhcmVudEZpbGVwYXRoID09PSAnbW9kdWxlLmpzJykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKHNlZW5WYWwgJiYgcGFyZW50RmlsZXBhdGggIT09IGZpbGVwYXRoKSB7XG5cdFx0XHRyZXR1cm4gcGFyZW50RmlsZXBhdGg7XG5cdFx0fVxuXHR9XG59O1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/parent-module/index.js\n");

/***/ })

};
;