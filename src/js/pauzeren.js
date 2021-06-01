//voeg jquery toe
var $ = require("jquery");

//voeg css toe
var link = document.createElement("link");
link.href = chrome.extension.getURL("/overlay.css");
link.type = "text/css";
link.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link);

//pauzeer video
var video = document.getElementsByClassName("video-stream html5-main-video")[0];
video.pause();

//pak de video container
var thumbnail = document.getElementsByClassName("style-scope ytd-player")[0];

//voeg overlay toe
var overlay = document.createElement("div");
overlay.classList.add("overlay");
thumbnail.prepend(overlay);

//voeg titel toe
var titel = document.createElement("div");
titel.classList.add("overlaytitel");
overlay.prepend(titel);
titel.innerHTML = "<h2>Waarvoor ga je kijken?</h2>";

//voeg iconen toe
for (i = 1; i < 4; i++) {
  //laad plaatjes
  var icoon = document.createElement("div");

  //maak plaatje aan
  var img = document.createElement("img");
  img.src = chrome.extension.getURL("images/categorie/icoon" + i + ".svg");

  //voeg classes toe aan alle iconen
  icoon.classList.add("knop");
  icoon.classList.add("icoon" + i);

  //voeg iconen toe aan overlay
  overlay.append(icoon);

  //voeg plaatjes toe aan iconen
  icoon.appendChild(img);

  //voeg EventListener toe aan iconen
  icoon.addEventListener("click", KlikKnop, false);
}

//als geklikt wordt
function KlikKnop() {
  overlay.classList.toggle("hideoverlay");
  video.play();
}
