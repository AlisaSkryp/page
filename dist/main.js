/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("(function() {\n    const DROP_DOWN_CLASS = 'dropdown'\n    const DROP_DOWN_INPUT_CLASS = 'dropdown__input'\n    const DROP_DOWN_OPTIONS_CLASS = 'dropdown__option'\n\n    const DROPDOWN_OPENED_CLASS = 'dropdown--opened'\n\n\n    function initializeDropdowns() {\n        let dropDowns = document.getElementsByClassName(DROP_DOWN_CLASS);\n        console.log(dropDowns);\n        for (var dropDown of dropDowns) {\n            initializeDropdown(dropDown)\n        }\n    }\n\n\n    function initializeDropdown(dropDown) {\n        console.log('Initializing dd', dropDown)\n\n        let inputElements = dropDown.getElementsByClassName(DROP_DOWN_INPUT_CLASS);\n\n        if (inputElements.length != 1) {\n            console.log('Just one dropdown input allowed')\n            return\n        }\n\n\n        let inputElement = inputElements[0]\n        console.log(inputElement)\n\n        let toggleDropdown = () => {\n            dropDown.classList.toggle(DROPDOWN_OPENED_CLASS);\n        }\n\n\n        inputElement.addEventListener('click', toggleDropdown)\n        for (var option of dropDown.getElementsByClassName(DROP_DOWN_OPTIONS_CLASS)) {\n            option.addEventListener('click', (e) => {\n                e.preventDefault();\n                inputElement.value = e.target.innerHTML;\n                toggleDropdown();\n            })\n\n        }\n    }\n\n    initializeDropdowns();\n\n})()\n\n//# sourceURL=webpack://epom/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;