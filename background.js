chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({ytMode: 'lowercase'});
});
