console.log ("Injection starting...");

function addScript (scriptSrc) {
    var s = document.createElement('script');
    // TODO: add "script.js" to web_accessible_resources in manifest.json
    s.src = chrome.extension.getURL(scriptSrc);
    s.onload = function() {
        this.parentNode.removeChild(this);
    };
    (document.head||document.documentElement).appendChild(s);
}

chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
	}
	}, 10);
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    addScript ('src/inject/downloadselected.js');

  });

console.log ("Injection complete.");
