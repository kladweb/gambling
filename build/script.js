/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/clickActions.js":
/*!********************************!*\
  !*** ./src/js/clickActions.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function clickActions() {
  const reviewCards = document.querySelectorAll('.review-card');
  let activeCard = null;
  reviewCards.forEach(card => {
    card.addEventListener('click', () => {
      toggleActive(card);
    });
  });
  function toggleActive(card) {
    card.classList.toggle('review-card-active');
    if (activeCard && activeCard !== card) {
      activeCard.classList.remove('review-card-active');
    }
    activeCard = card;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (clickActions);

/***/ }),

/***/ "./src/js/scrollbar.js":
/*!*****************************!*\
  !*** ./src/js/scrollbar.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function scrollbar() {
  const scrollArea = document.querySelector('.area_card');
  const scrollBar = document.querySelector('.scrollbar');
  const scrollBarActive = document.querySelector('.scrollbar_active');
  scrollArea.addEventListener('scroll', moveScroll);
  function moveScroll() {
    const scrollPercentage = scrollArea.scrollTop / (scrollArea.scrollHeight - scrollArea.clientHeight);
    const maxTop = scrollBar.offsetHeight - scrollBarActive.offsetHeight;
    scrollBarActive.style.marginTop = `${maxTop * scrollPercentage}px`;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (scrollbar);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scrollbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollbar.js */ "./src/js/scrollbar.js");
/* harmony import */ var _clickActions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clickActions.js */ "./src/js/clickActions.js");


(0,_scrollbar_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_clickActions_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
}();
/******/ })()
;
//# sourceMappingURL=script.js.map