/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/js/background.js ***!
  \******************************/
var YouTubeWatch = 'https://www.youtube.com/watch?v=';
var YouTubeHome = 'https://www.youtube.com/';
var kijkurl, kijktijd, kijkdata;

//herlaad als de actieve pagina verandert
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
  console.log(tab.url)
    if(tab.url.indexOf(YouTubeWatch) !== -1){
      // als pagina geladen is

        chrome.tabs.executeScript(null, {file: "foreground.bundle.js"}, () => console.log('script loaded'))
        //sla url op
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        kijkdata.push(tabs[0].url); 
        //sla tijd van openen op
        var dt = new Date();
        var DateStart = performance.now();
        });
    } else if (tab.url === YouTubeHome) {
    console.log('No video detected.')}
    }
  })
  ;

/******/ })()
;
//# sourceMappingURL=background.bundle.js.map