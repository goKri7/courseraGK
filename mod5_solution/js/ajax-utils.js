(function (global) {

var ajaxUtils = {};		// This object will be exposed

// Returns an HTTP request object
function getRequestObject() {
  if (window.XMLHttpRequest) { return (new XMLHttpRequest()); } 
  else if (window.ActiveXObject) {return (new ActiveXObject("Microsoft.XMLHTTP"));} 
	// For very old IE browsers (optional)
  else { global.alert("Ajax is not supported!"); return(null); }
}

// Makes an Ajax GET request to 'requestUrl'
ajaxUtils.sendGetRequest = 
  function(requestUrl, responseHandler, isJsonResponse) {
    var request = getRequestObject();
    request.onreadystatechange = function() { handleResponse(request, responseHandler,
		isJsonResponse); };
    request.open("GET", requestUrl, true);
    request.send(null); // for POST only
  };

// Only calls user provided 'responseHandler' function if response ready and no error
function handleResponse(request, responseHandler, isJsonResponse) {
  if ((request.readyState == 4) && (request.status == 200)) {
    // Default to isJsonResponse = true
    if (isJsonResponse == undefined) { isJsonResponse = true; }
    if (isJsonResponse) { responseHandler(JSON.parse(request.responseText)); }
    else {  responseHandler(request.responseText); }
  }
}

// Expose utility to the global object
global.$ajaxUtils = ajaxUtils;


})(window);

