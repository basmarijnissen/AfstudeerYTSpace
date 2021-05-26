chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
  chrome.tabs.executeScript(null, {file: "foreground.bundle.js"}, () => console.log('script loaded'))
} 
  })
  