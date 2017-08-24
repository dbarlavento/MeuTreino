function xmlLoader(url) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
    		if (this.readyState === 4 && this.status === 200) {
       			document.getElementById("xml").innerHTML = xhttp.responseText;
    		}	
	};
	xhttp.open("GET", url, true);
	xhttp.send();
}
