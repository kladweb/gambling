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
  const buttonLang = document.querySelector('.language_button');
  const buttonEn = document.querySelector('.lang_en');
  const buttonRu = document.querySelector('.lang_ru');
  const closeModal = document.querySelector('.modal_close');
  const iconOpen = document.querySelector('.icon_open');
  const iconClose = document.querySelector('.icon_close');
  const pageMenu = document.querySelector('.page_menu');
  const pageButtons = document.querySelector('.page_buttons');
  let activeCard = null;
  reviewCards.forEach(card => {
    card.addEventListener('click', () => {
      toggleActive(card);
    });
  });
  function toggleActive(card) {
    if (card === activeCard) {
      return;
    }
    if (activeCard) {
      activeCard.classList.remove('review-card-active');
    }
    card.classList.add('review-card-active');
    activeCard = card;
  }
  buttonLang.addEventListener('click', changeLanguage);
  function changeLanguage() {
    if (window.innerWidth < 700) {
      return;
    }
    if (buttonEn.style.display === 'none') {
      buttonEn.style.display = 'inline-block';
      buttonRu.style.display = 'none';
    } else {
      buttonEn.style.display = 'none';
      buttonRu.style.display = 'inline-block';
    }
  }
  closeModal.addEventListener('click', openCloseModal);
  function openCloseModal() {
    if (iconOpen.classList.contains('close')) {
      iconOpen.classList.remove('close');
      iconClose.classList.add('close');
      pageButtons.style.visibility = 'hidden';
      pageMenu.classList.remove('open-flex');
    } else {
      iconOpen.classList.add('close');
      iconClose.classList.remove('close');
      pageButtons.style.visibility = 'visible';
      pageMenu.classList.add('open-flex');
    }
  }

  // проверяем, чтобы меню не оставалось в состоянии "display: none" при изменении разрешения экрана (например поворот
  // телефона):
  window.addEventListener('resize', checkMenu);
  function checkMenu() {
    if (pageButtons.style.visibility === 'hidden' && window.innerWidth > 700) {
      pageButtons.style.visibility = 'visible';
      pageMenu.classList.add('open-flex');
    }
    if (pageButtons.style.visibility === 'visible' && window.innerWidth <= 700) {
      pageButtons.style.visibility = 'hidden';
      pageMenu.classList.remove('open-flex');
      iconOpen.classList.remove('close');
      iconClose.classList.add('close');
      buttonRu.style.display = 'none';
      buttonEn.style.display = 'none';
    }
    if (getComputedStyle(buttonRu).display !== 'none' && window.innerWidth <= 700) {
      buttonRu.style.display = 'none';
    }
    if (getComputedStyle(buttonEn).display !== 'none' && window.innerWidth <= 700) {
      buttonEn.style.display = 'none';
    }
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