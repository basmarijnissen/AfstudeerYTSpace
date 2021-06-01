import { v4 as uuidv4 } from "uuid";
var YouTubeWatch = "https://www.youtube.com/watch?v=";
var YouTubeHome = "https://www.youtube.com/";
var dataID, kijktijd, start, end, videodata;
var kijktVideo,
  dataPushed = new Boolean(false);
var counter = 0;
var kijkdata = [];

console.log("ViewSpace initialized.");
//herlaad als de actieve pagina verandert
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == "complete") {
    start, (end = 0);

    // als de persoon een video gaat kijken:
    if (tab.url.indexOf(YouTubeWatch) !== -1) {
      window.setTimeout(LoadPause, 100);
      function LoadPause() {
        chrome.tabs.executeScript(null, { file: "pauzeren.bundle.js" });
      }

      // als YouTube video geladen is, start script
      window.setTimeout(LoadScript, 3000);
      function LoadScript() {
        if (counter == 0) {
          chrome.tabs.executeScript(
            null,
            { file: "foreground.bundle.js" },
            () => console.log("Foreground.js loaded")
          );
          counter += 1;
        } else if (counter == 1) {
          console.log("Already initialized");
        }
      }
      // Begin cyclus
      if ((kijktVideo = false)) {
        LogStart();
        // als er al een video openstond, sluit cyclus en begin opnieuw
      } else if ((kijktVideo = true)) {
        LogEnd();
        LogStart();
      }
      // als de geopende pagina geen YouTube video is
    } else if (tab.url === YouTubeHome) {
      if (kijktVideo === true) {
        //sluit de video af
        LogEnd();
        kijktVideo = false;
      } else if (kijktVideo === false) {
        console.log("No previous and current video detected.");
      }
    }
  } else if (changeInfo.status == "loading") {
  }
});

function LogStart() {
  //zeg dat de persoon een video kijkt
  kijktVideo = true;
  videodata = [];

  //geef video een unieke id
  dataID = uuidv4();
  videodata.push(dataID);
  console.log("Starting log of " + dataID);

  //sla url op
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    videodata.push(tabs[0].url);
    console.log("video url saved: " + tabs[0].url);

    //sla tijd van openen op
    start = new Date();
    console.log("Start time saved: " + start);
  });
}

function LogEnd() {
  kijktVideo = false;
  if (videodata) {
    //de persoon stopt met het kijken van de video
    console.log("Ending log of " + dataID);

    // bereken de tijd dat de persoon de video kijkt
    end = new Date();
    kijktijd = end - start;
    kijktijd = kijktijd / 1000;
    videodata.push(kijktijd);

    //geef door dat alle data verzameld is
    dataPushed = true;
    if (dataPushed === true) {
      //stuur data door naar sessie array
      kijkdata.push(videodata);
      console.log("pushing log to kijkdata.");
      console.log(kijkdata);
      videodata = [];
    }
  } else {
    console.log("No log to push to kijkdata.");
  }
}

chrome.windows.onRemoved.addListener(function (windowId) {
  chrome.storage.sync.set({ kijkdata: value }, function () {
    console.log("Value is set to " + value);
  });
  alert("!! Je planeet wordt bijgewerkt... !!");
});
