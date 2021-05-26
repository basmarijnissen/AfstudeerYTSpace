/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/js/foreground.js ***!
  \******************************/
var balk = document.getElementsByClassName('ytp-right-controls')[0];
var video = document.getElementsByClassName('ytp-chrome-controls')[0];
var blokje = document.createElement("div"),
    popup = document.createElement("div");
var iconURL = chrome.extension.getURL("images/icoon.svg");

//plaats icoon in balk
blokje.classList.add("ytp-button");
balk.prepend(blokje); 
blokje.innerHTML = "<img src='" + iconURL + "'id='buttonimage'>";

//plaats popup
popup.classList.add("popup");
video.append(popup);
popup.innerHTML +=  "<span class='popuptext' id='myPopup'><div id=emoji>😐</div><div id=emoji2>🙁</div></span>";
var popuptext = document.getElementsByClassName('popuptext')[0];

//als knop geklikt wordt, laat de popup zien
blokje.onclick = function() { 
    var popup = document.getElementsByClassName('popup')[0];
    popup.classList.toggle("show");
    popuptext.classList.toggle('show');
}

//plezier
const emojiplezier = ['🙁','😕','😐','🙂','😀'];
popuptext.innerHTML += "<div id=pleziertekst></div><input id='plezierslider' type='range' value='0' min='0' max='9' step='1'>";
var plezierslider = document.getElementById('plezierslider');
var pleziertekst = document.getElementById('pleziertekst');
pleziertekst.textContent = 'Geeft de video jou plezier?';
plezierslider.addEventListener('input', (e) => {
    var emoji = document.getElementById('emoji');
    let rangeValue = e.target.value;
    emoji.textContent = emojiplezier[Math.floor(rangeValue / 2)];
})

//enthousiasme
const emojienthousiasme = ['😔','😞','🙁','😮','😳'];
popuptext.innerHTML += "<div id=enthousiasmetekst></div><input id='enthousiasmeslider' type='range' value='0' min='0' max='9' step='1'>";
var enthousiasmeslider = document.getElementById('enthousiasmeslider');
var enthousiasmetekst = document.getElementById('enthousiasmetekst');
enthousiasmetekst.textContent = 'Maakt de video jou enthousiast?';
enthousiasmeslider.addEventListener('input', (e) => {
    var emoji2 = document.getElementById('emoji2');
    let rangeValue2 = e.target.value;
    emoji2.textContent = emojienthousiasme[Math.floor(rangeValue2 / 2)];
})


/******/ })()
;
//# sourceMappingURL=foreground.bundle.js.map