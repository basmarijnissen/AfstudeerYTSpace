chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
  console.log("script loaded")
  chrome.tabs.executeScript(null, {file: "foreground.bundle.js"}, () => console.log('i saved'))
    }
  })
  