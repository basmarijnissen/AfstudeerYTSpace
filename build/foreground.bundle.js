/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/js/foreground.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'emoji-slider'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var YTBalkrechts = document.getElementsByClassName('ytp-right-controls')[0],
    YTBalk = document.getElementsByClassName('ytp-chrome-controls')[0],
    icoon = document.createElement("div"),
    popup = document.createElement("div"),
    iconURL = chrome.extension.getURL("images/icoon.svg");



//voeg button class toe aan icoon 
icoon.classList.add("ytp-button");
//voeg icoon toe aan balk
YTBalkrechts.prepend(icoon); 
//plak het plaatje in icoon
icoon.innerHTML = "<img src='" + iconURL + "'id='buttonimage'>";

//voeg de popup toe aan het venster
popup.classList.add("popup");
YTBalk.append(popup);
popup.innerHTML +=  "<span class='popuptext' id='myPopup'></span>";

//voeg de emotieslider toe aan de popup
var popuptext = document.getElementsByClassName('popuptext')[0];
popuptext.innerHTML += "<emoji-slider id=PleasureSlider></emoji-slider>";
const PleasureSlider = document.querySelector('#PleasureSlider');

PleasureSlider.addEventListener('change', () => {
    const v = PleasureSlider.value;
    if (v < 0.2) {
        PleasureSlider.emoji = '🙁';
    } else if (v < 0.4) {
        PleasureSlider.emoji = '😕';
    } else if (v < 0.6) {
        PleasureSlider.emoji = '😐';
    } else if (v < 0.8) {
        PleasureSlider.emoji = '🙂';
    } else {
        PleasureSlider.emoji = '😀';
    }
  });

icoon.onclick = function() { 
    var popup = document.getElementsByClassName('popup')[0];
    popup.classList.toggle("show");
    popuptext.classList.toggle('show');
};
/******/ })()
;
//# sourceMappingURL=foreground.bundle.js.map