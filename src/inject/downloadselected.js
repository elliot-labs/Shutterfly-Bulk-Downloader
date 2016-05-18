
function showNoneError () {
	alert ('No selected photos found!  Please select one or more photos and try again!');	
}

if ($('#tl_selection_bar').length) {
	
	var test_data = JSON.parse(localStorage.getItem('crossClusterSessionData'));
	var authToken = test_data.sessionToken;

	if (ThisLife.app.selection._collection.models.length <= 0) {
		showNoneError ();
	}

	for (var i=0; i<ThisLife.app.selection._collection.models.length; i++) {

		var moment = ThisLife.app.selection._collection.models[i];

		var downloadUrl = "https://io.thislife.com/download?accessToken=" + authToken + "&momentId=" + moment.id + "&source=FMV"

		window.open (downloadUrl);
		// chrome.downloads.download({ 
		// 	url: downloadUrl,
		// 	filename: "ThisLife/" + i + ".jpg"
		// }, function (downloadId) {
		// 	console.log (downloadId);
		// });
	}
} else {
	showNoneError ();
}