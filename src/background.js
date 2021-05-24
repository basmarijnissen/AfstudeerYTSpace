chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
  console.log("script loaded")
  chrome.tabs.insertCSS(null, {file: './style.css'});
  chrome.tabs.executeScript(null, {file: './foreground.js'}, () => console.log('i saved'))
  chrome.tabs.executeScript(null, {file:"https://raw.githubusercontent.com/pshihn/emoji-slider/master/bin/emoji-slider.js"});
    }
  })
  