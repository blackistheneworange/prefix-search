/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _js_Trie_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Trie.js */ \"./src/js/Trie.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_js_Trie_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://trie-search/./src/index.js?");

/***/ }),

/***/ "./src/js/Trie.js":
/*!************************!*\
  !*** ./src/js/Trie.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _TrieNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TrieNode.js */ \"./src/js/TrieNode.js\");\n/* harmony import */ var _utils_get_ascii_from_char_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/get-ascii-from-char.js */ \"./src/js/utils/get-ascii-from-char.js\");\n/* harmony import */ var _utils_get_char_from_ascii_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/get-char-from-ascii.js */ \"./src/js/utils/get-char-from-ascii.js\");\n/* harmony import */ var _utils_is_lower_case_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/is-lower-case.js */ \"./src/js/utils/is-lower-case.js\");\n/* harmony import */ var _utils_is_upper_case_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/is-upper-case.js */ \"./src/js/utils/is-upper-case.js\");\n/* harmony import */ var _utils_to_lower_case_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/to-lower-case.js */ \"./src/js/utils/to-lower-case.js\");\n/* harmony import */ var _utils_to_upper_case_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/to-upper-case.js */ \"./src/js/utils/to-upper-case.js\");\n\n\n\n\n\n\n\nclass Trie {\n  #words;\n  #root;\n  #ignore_case;\n  constructor() {\n    this.#words = [];\n    this.#root = new _TrieNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.#ignore_case = false;\n  }\n  get words() {\n    return this.#words;\n  }\n  set ignore_case(value) {\n    this.#ignore_case = Boolean(value);\n  }\n  #addWord(word) {\n    if (this.#words.includes(word)) {\n      return;\n    }\n    this.#words.push(word);\n    let trie_node = this.#root;\n    for (let word_index = 0; word_index < word.length; word_index++) {\n      trie_node.passed_through++;\n      const char_index = (0,_utils_get_ascii_from_char_js__WEBPACK_IMPORTED_MODULE_1__.getAsciiFromChar)(word[word_index]);\n      if (!trie_node.children[char_index]) trie_node.children[char_index] = new _TrieNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n      trie_node = trie_node.children[char_index];\n    }\n    trie_node.passed_through++;\n    trie_node.end_of_word = true;\n  }\n  addWords(words) {\n    for (const word of words) {\n      this.#addWord(word.trim());\n    }\n  }\n  #getWords(curr_word, trie_node) {\n    let results = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n    if (trie_node.end_of_word) results.push(curr_word);\n    for (let i = 0; i < 128; i++) {\n      if (trie_node.children[i]) {\n        const char = (0,_utils_get_char_from_ascii_js__WEBPACK_IMPORTED_MODULE_2__.getCharFromAscii)(i);\n        this.#getWords(curr_word + char, trie_node.children[i], results);\n      }\n    }\n    return results;\n  }\n  removeWords(words) {\n    for (const word of words) {\n      this.#removeWord(word);\n    }\n  }\n  #removeWord(word) {\n    if (!this.#words.includes(word)) {\n      throw new Error(\"Word does not exist.\");\n    }\n    this.#words.splice(this.#words.indexOf(word), 1);\n    this.#_removeWord(word, this.#root, 0);\n  }\n  #_removeWord(word, trie_node, word_index) {\n    if (!trie_node) return false;\n    trie_node.passed_through--;\n    if (word_index === word.length) {\n      if (trie_node.end_of_word) {\n        trie_node.end_of_word = false;\n        return true;\n      }\n      return false;\n    }\n    const char_index = (0,_utils_get_ascii_from_char_js__WEBPACK_IMPORTED_MODULE_1__.getAsciiFromChar)(word[word_index]);\n    const child_trie_node = trie_node.children[char_index];\n    if (!this.#_removeWord(word, child_trie_node, word_index + 1)) return false;\n    if (child_trie_node.passed_through === 0) {\n      trie_node.children[char_index] = undefined;\n    }\n    return true;\n  }\n  getPrefixMatches(prefix) {\n    if (!prefix || prefix.length === 0) return [];\n    return this.#getPrefixMatches(prefix, 0, this.#root);\n  }\n  #getPrefixMatches(prefix, prefix_index, trie_node) {\n    if (!trie_node) return [];\n    if (prefix_index === prefix.length) return this.#getWords(prefix, trie_node, []);\n    const char_index = (0,_utils_get_ascii_from_char_js__WEBPACK_IMPORTED_MODULE_1__.getAsciiFromChar)(prefix[prefix_index]);\n    const opposite_case_char_index = (0,_utils_is_lower_case_js__WEBPACK_IMPORTED_MODULE_3__.isLowerCase)(char_index) ? (0,_utils_to_upper_case_js__WEBPACK_IMPORTED_MODULE_6__.toUpperCase)(char_index) : (0,_utils_is_upper_case_js__WEBPACK_IMPORTED_MODULE_4__.isUpperCase)(char_index) ? (0,_utils_to_lower_case_js__WEBPACK_IMPORTED_MODULE_5__.toLowerCase)(char_index) : undefined;\n    let result = this.#getPrefixMatches(prefix, prefix_index + 1, trie_node.children[char_index]);\n    if (this.#ignore_case && opposite_case_char_index) {\n      prefix = prefix.slice(0, prefix_index) + (0,_utils_get_char_from_ascii_js__WEBPACK_IMPORTED_MODULE_2__.getCharFromAscii)(opposite_case_char_index) + prefix.slice(prefix_index + 1, prefix.length);\n      result = [...result, ...this.#getPrefixMatches(prefix, prefix_index + 1, trie_node.children[opposite_case_char_index])];\n    }\n    return result;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Trie);\n\n//# sourceURL=webpack://trie-search/./src/js/Trie.js?");

/***/ }),

/***/ "./src/js/TrieNode.js":
/*!****************************!*\
  !*** ./src/js/TrieNode.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass TrieNode {\n  children;\n  end_of_word;\n  passed_through;\n  constructor() {\n    this.children = [];\n    this.end_of_word = false;\n    this.passed_through = 0;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrieNode);\n\n//# sourceURL=webpack://trie-search/./src/js/TrieNode.js?");

/***/ }),

/***/ "./src/js/utils/get-ascii-from-char.js":
/*!*********************************************!*\
  !*** ./src/js/utils/get-ascii-from-char.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAsciiFromChar: () => (/* binding */ getAsciiFromChar)\n/* harmony export */ });\nconst getAsciiFromChar = char => {\n  return char.charCodeAt(0);\n};\n\n//# sourceURL=webpack://trie-search/./src/js/utils/get-ascii-from-char.js?");

/***/ }),

/***/ "./src/js/utils/get-char-from-ascii.js":
/*!*********************************************!*\
  !*** ./src/js/utils/get-char-from-ascii.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCharFromAscii: () => (/* binding */ getCharFromAscii)\n/* harmony export */ });\nconst getCharFromAscii = ascii => {\n  return String.fromCharCode(ascii);\n};\n\n//# sourceURL=webpack://trie-search/./src/js/utils/get-char-from-ascii.js?");

/***/ }),

/***/ "./src/js/utils/is-lower-case.js":
/*!***************************************!*\
  !*** ./src/js/utils/is-lower-case.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isLowerCase: () => (/* binding */ isLowerCase)\n/* harmony export */ });\nconst isLowerCase = ascii => {\n  return ascii >= 97 && ascii <= 122;\n};\n\n//# sourceURL=webpack://trie-search/./src/js/utils/is-lower-case.js?");

/***/ }),

/***/ "./src/js/utils/is-upper-case.js":
/*!***************************************!*\
  !*** ./src/js/utils/is-upper-case.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isUpperCase: () => (/* binding */ isUpperCase)\n/* harmony export */ });\nconst isUpperCase = ascii => {\n  return ascii >= 65 && ascii <= 90;\n};\n\n//# sourceURL=webpack://trie-search/./src/js/utils/is-upper-case.js?");

/***/ }),

/***/ "./src/js/utils/to-lower-case.js":
/*!***************************************!*\
  !*** ./src/js/utils/to-lower-case.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toLowerCase: () => (/* binding */ toLowerCase)\n/* harmony export */ });\nconst toLowerCase = ascii => {\n  return ascii + 32;\n};\n\n//# sourceURL=webpack://trie-search/./src/js/utils/to-lower-case.js?");

/***/ }),

/***/ "./src/js/utils/to-upper-case.js":
/*!***************************************!*\
  !*** ./src/js/utils/to-upper-case.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toUpperCase: () => (/* binding */ toUpperCase)\n/* harmony export */ });\nconst toUpperCase = ascii => {\n  return ascii - 32;\n};\n\n//# sourceURL=webpack://trie-search/./src/js/utils/to-upper-case.js?");

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module can't be inlined because the eval devtool is used.
/******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ var __webpack_exports__default = __webpack_exports__["default"];
/******/ export { __webpack_exports__default as default };
/******/ 
