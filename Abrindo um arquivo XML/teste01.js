var xmlDoc;
var painel;
var calorias;

function xmlLoader(url) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
    		if (this.readyState === 4 && this.status === 200) {
			xmlDoc = xhttp.responseXML;
       			getCalorias(xmlDoc);
    		}	
	};
	xhttp.open("GET", url, true);
	xhttp.send();
}

function getCalorias(xml) {
	var calValor;

	calorias = xml.getElementsByTagName("Calories");
	painel = document.getElementById("calorias");
	for(i = 0; i < calorias.length; i++){
		calValor = document.createElement("p");
		calValor.innerHTML = 
		xml.getElementsByTagName("Calories")[i].childNodes[0].nodeValue;
		painel.appendChild(calValor);
	}
}
