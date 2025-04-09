/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/find-root";
exports.ids = ["vendor-chunks/find-root"];
exports.modules = {

/***/ "(ssr)/./node_modules/find-root/index.js":
/*!*****************************************!*\
  !*** ./node_modules/find-root/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar path = __webpack_require__(/*! path */ \"path\")\nvar fs = __webpack_require__(/*! fs */ \"fs\")\n\nfunction defaultCheck (dir) {\n  return fs.existsSync(path.join(dir, 'package.json'))\n}\n\nfunction findRoot (start, check) {\n  start = start || module.parent.filename\n  check = check || defaultCheck\n\n  if (typeof start === 'string') {\n    if (start[start.length - 1] !== path.sep) {\n      start += path.sep\n    }\n    start = start.split(path.sep)\n  }\n  if (!start.length) {\n    throw new Error('package.json not found in path')\n  }\n  start.pop()\n  var dir = start.join(path.sep)\n  try {\n    if (check(dir)) {\n      return dir\n    }\n  } catch (e) {}\n  return findRoot(start, check)\n}\n\nmodule.exports = findRoot\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZmluZC1yb290L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7QUFBQSxXQUFXLG1CQUFPLENBQUMsa0JBQU07QUFDekIsU0FBUyxtQkFBTyxDQUFDLGNBQUk7O0FBRXJCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy95dWppbi9EZXNrdG9wL2dpdGh1Yi9teS1wb3J0Zm9saW8vbm9kZV9tb2R1bGVzL2ZpbmQtcm9vdC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxudmFyIGZzID0gcmVxdWlyZSgnZnMnKVxuXG5mdW5jdGlvbiBkZWZhdWx0Q2hlY2sgKGRpcikge1xuICByZXR1cm4gZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4oZGlyLCAncGFja2FnZS5qc29uJykpXG59XG5cbmZ1bmN0aW9uIGZpbmRSb290IChzdGFydCwgY2hlY2spIHtcbiAgc3RhcnQgPSBzdGFydCB8fCBtb2R1bGUucGFyZW50LmZpbGVuYW1lXG4gIGNoZWNrID0gY2hlY2sgfHwgZGVmYXVsdENoZWNrXG5cbiAgaWYgKHR5cGVvZiBzdGFydCA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAoc3RhcnRbc3RhcnQubGVuZ3RoIC0gMV0gIT09IHBhdGguc2VwKSB7XG4gICAgICBzdGFydCArPSBwYXRoLnNlcFxuICAgIH1cbiAgICBzdGFydCA9IHN0YXJ0LnNwbGl0KHBhdGguc2VwKVxuICB9XG4gIGlmICghc3RhcnQubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwYWNrYWdlLmpzb24gbm90IGZvdW5kIGluIHBhdGgnKVxuICB9XG4gIHN0YXJ0LnBvcCgpXG4gIHZhciBkaXIgPSBzdGFydC5qb2luKHBhdGguc2VwKVxuICB0cnkge1xuICAgIGlmIChjaGVjayhkaXIpKSB7XG4gICAgICByZXR1cm4gZGlyXG4gICAgfVxuICB9IGNhdGNoIChlKSB7fVxuICByZXR1cm4gZmluZFJvb3Qoc3RhcnQsIGNoZWNrKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZpbmRSb290XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/find-root/index.js\n");

/***/ })

};
;