var balk = document.getElementsByClassName('ytp-right-controls')[0];
var video = document.getElementsByClassName('ytp-chrome-controls')[0];
var blokje = document.createElement("div"),
    popup = document.createElement("div");
var iconURL = chrome.extension.getURL("images/icoon.svg");
var popuptext = document.getElementsByClassName('popuptext')[0];

blokje.classList.add("ytp-button");
balk.prepend(blokje); 
blokje.innerHTML = "<img src='" + iconURL + "'id='buttonimage'>";

popup.classList.add("popup");
video.append(popup);
popup.innerHTML +=  "<span class='popuptext' id='myPopup'>Popup text...</span>";

blokje.onclick = function() { 
    var popup = document.getElementsByClassName('popup')[0];
    popup.classList.toggle("show");
    popuptext.classList.toggle('show');
}

popuptext.innerHTML += "<emoji-slider emoji='😍'></emoji-slider>";

