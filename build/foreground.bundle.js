/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/js/foreground.js ***!
  \******************************/
var balk = document.getElementsByClassName('ytp-right-controls')[0],
    video = document.getElementsByClassName('ytp-chrome-controls')[0],
    blokje = document.createElement("div"),
    popup = document.createElement("div"),
    iconURL = chrome.extension.getURL("images/icoon.svg");

//laad css
var link = document.createElement("link");
link.href = chrome.extension.getURL("/foreground.css");
link.type = "text/css";
link.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link);

//plaats inhoud in balk
blokje.classList.add("ytp-button");
balk.prepend(blokje); 
blokje.innerHTML = "<img src='" + iconURL + "'id='buttonimage'>";

popup.classList.add("popup");
popup.innerHTML +=  "<span class='popuptext' id='myPopup'><div id=emoji1>😐</div><div id=emoji2>🙁</div></span>";
video.append(popup);

//plaats popup
var popuptext = document.getElementsByClassName('popuptext')[0];

//als knop geklikt wordt, laat de popup zien
blokje.onclick = function() { 
    var popup = document.getElementsByClassName('popup')[0];
    popup.classList.toggle("show");
    popuptext.classList.toggle('show');
}

//plezier
popuptext.innerHTML += "<div id=pleziertekst></div><input id='plezierslider' class='emojislider' type='range' value='0' min='0' max='9' step='1'>";
var pleziertekst = document.getElementById('pleziertekst');
pleziertekst.textContent = 'Geeft de video jou plezier?';

//enthousiasme
popuptext.innerHTML += "<div id=enthousiasmetekst></div><input id='enthousiasmeslider' class='emojislider' type='range' value='0' min='0' max='9' step='1'>";
var enthousiasmetekst = document.getElementById('enthousiasmetekst');
enthousiasmetekst.textContent = 'Maakt de video jou enthousiast?';

var emojis, emojiSelected;
document.querySelectorAll('.emojislider').forEach( function (item, index) {
    index += 1;
    var emoji = item.id;
    if (emoji == "plezierslider") {
        var emojis = ['🙁','😕','😐','🙂','😀'];
    } else {
        var emojis = ['😔','😞','🙁','😮','😳'];
    }
    item.addEventListener('input', (e) => {
        emojiSelected = document.getElementById('emoji' + index);
        var rangeValue = e.target.value;
        emojiSelected.textContent = emojis[Math.floor(rangeValue / 2)];
    })
})
/******/ })()
;
//# sourceMappingURL=foreground.bundle.js.map