(function() {
	var scr = document.createElement("script");
  scr.type="text/javascript";
  scr.src=chrome.extension.getURL("makeembiggerredux.js");
  (document.head || document.body || document.documentElement).appendChild(scr);
})();