var pathArqTreinos = "../treinos/"
var xmlDom;
var arquico;

function inicio(arq) {
	arquivo = arq;
	carregarXML(arquivo);
}

function carregarXML(arq) {
	var xhttp = new XMLHttpRequest();
	var url = arq;

	//document.getElementById("calorias").innerHTML = url;
	xhttp.onreadystatechange = function() {
    		if (this.readyState === 4 && this.status === 200) {
			xmlDom = xhttp.responseXML;
			getNumVoltas();
			getCalorias();
    		}	
	};
	
	xhttp.open("GET", url, true);
	xhttp.send();

}

function getCalorias() {
	var calorias;
	var painel;
	var calValor;

	calorias = xmlDom.getElementsByTagName("Calories");
	
	painel = document.getElementById("calorias");
	
	for(i = 0; i < calorias.length; i++){
		calValor = document.createElement("p");
		calValor.innerHTML = calorias[i].childNodes[0].nodeValue;
		painel.appendChild(calValor);
	}
}

function getNumVoltas() {
	var voltas = xmlDom.getElementsByTagName("Lap");
	var painel = document.getElementById("calorias");
	var eleVolta;
	var numVoltas = 0;

	for(i = 0; i < voltas.length; i++) {
		numVoltas++;
	}

	eleVolta = document.createElement("p");
	eleVolta.innerHTML = "Você deu " + numVoltas + " voltas";
	painel.appendChild(eleVolta);
}
