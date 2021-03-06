browser.browserAction.onClicked.addListener(function(tab){
	var executing = browser.tabs.executeScript({
	  file: "downloader.js"
	});
	executing.then(onExecuted, onError);
	 

});

function onStartedDownload(id) {
  return true;
}

function onFailed(error) {
  return false;
}

function onExecuted(result) {
  var downloading = browser.downloads.download({
      url : result[0] + "",
      saveAs : true
    });

    downloading.then(onStartedDownload, onFailed);
}

function onError(error) {
  return false;
}


