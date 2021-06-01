/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./src/js/pauzeren.js ***!
  \****************************/
//voeg css toe
var link = document.createElement("link");
link.href = chrome.extension.getURL("/overlay.css");
link.type = "text/css";
link.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link);

//pauzeer video
var video = document.getElementsByClassName("video-stream html5-main-video")[0];
video.pause();

//pak de video & thumbnail
var thumbnail = document.getElementsByClassName(
  "style-scope ytd-player"
)[0];

//voeg class toe
var overlay = document.createElement("div");
overlay.classList.add("overlay");
thumbnail.prepend(overlay);

var titel = document.createElement("div");
titel.classList.add("overlaytitel");
overlay.prepend(titel);
titel.innerHTML = "<h2>Waarvoor ga je kijken?</h2>";

/******/ })()
;
//# sourceMappingURL=pauzeren.bundle.js.map