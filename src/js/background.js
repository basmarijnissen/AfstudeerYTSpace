import { v4 as uuidv4 } from 'uuid';
var YouTubeWatch = 'https://www.youtube.com/watch?v=';
var YouTubeHome = 'https://www.youtube.com/';
var dataID, kijktijd, start, end;
var kijkdata = [];
var videodata;
var kijktVideo, dataPushed = new Boolean(false);

//herlaad als de actieve pagina verandert
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    start, end = 0;

    // als de persoon een video gaat kijken:
    if(tab.url.indexOf(YouTubeWatch) !== -1){
      // als YouTube video geladen is, start script
      chrome.tabs.executeScript(null, {file: "foreground.bundle.js"}, () => console.log('Foreground.js loaded'))
        
      // Begin cyclus
      if (kijktVideo = false) { 
        kijktVideo = true;        
        LogStart();
        // als er al een video openstond
      } else if (kijktVideo = true) {
        //sluit cyclus af en begin opnieuw
        LogEnd();
        LogStart();
       }

    } else if (tab.url === YouTubeHome) {
      // als de geopende pagina geen YouTube video is
      if (kijktVideo = true) {
        LogEnd();
        kijktVideo = false;
      } else {
        console.log('No previous and current video detected.')
      }
      }
    } else if (changeInfo.status == 'loading') {
      }
  });

  function LogStart() {
    videodata = [];
        //geef video een unieke id
        dataID = uuidv4();
        videodata.push(dataID);
        console.log('Starting log of ' + dataID);

        //sla url op
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        videodata.push(tabs[0].url); 
        console.log("video url saved: " + tabs[0].url);

        //sla tijd van openen op
        start = new Date();
        console.log("Start time saved: " + start);
        });
  }

  function LogEnd() {
    if (videodata){
      console.log('Ending log of ' + dataID);
      // als de gebruiker de pagina sluit
      end = new Date();
      kijktijd = (end - start);
      kijktijd = kijktijd / 1000;
      videodata.push(kijktijd);
      kijktVideo = false;
      dataPushed = true;
      // console.log('Ended log of ' + dataID + ".");
      console.log("Log details: " + videodata);
     if (dataPushed = true) {
      kijkdata.push(videodata);
      console.log('pushing log to kijkdata.');
      console.log(kijkdata);
     }
    }
    else {
    console.log('No log to push to kijkdata.')
   }
  }

  chrome.windows.onRemoved.addListener(function(windowId){
    chrome.storage.sync.set({kijkdata: value}, function() {
      console.log('Value is set to ' + value);
    });
    alert("!! Je planeet wordt bijgewerkt... !!");
    
  });