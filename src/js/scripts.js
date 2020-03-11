let div_autocp = document.getElementById("autocompletion");

function afficheVilles(tableau) {
	if (div_autocp.children.length > 0) {
		videVilles();
	}
	for (var i = 0; i < tableau.length; i++) {
		let ville = document.createElement("p");
		ville.innerHTML = tableau[i];
		div_autocp.appendChild(ville);
	}
}

function videVilles() {
	for (var i = div_autocp.children.length - 1; i >= 0; i--) {
		div_autocp.removeChild(div_autocp.children[i]);
	}
}


function requeteAJAX(stringVille,callback) {
	let url = "php/requeteVille.php?ville=" + stringVille;
	let requete = new XMLHttpRequest();
	requete.open("GET", url, true);
	requete.addEventListener("load", function () {
		callback(requete);
	});
	requete.send(null);
}

function callback_1(req) {
	console.log(req);
}

function callback_2(req) {
	let xhrJSON = JSON.parse(req.responseText);
	console.log(xhrJSON);
}

function callback_3(req) {
	let xhrJSON = JSON.parse(req.responseText);
	let tabName = new Array;
	for (var i = 0; i < xhrJSON.length; i++) {
		tabName.push(xhrJSON[i].name);
	}
	console.log(tabName);
}

function callback_4(req) {
	let xhrJSON = JSON.parse(req.responseText);
	let tabName = new Array;
	for (var i = 0; i < xhrJSON.length; i++) {
		tabName.push(xhrJSON[i].name);
	}
	afficheVilles(tabName);
}

function maRequeteAJAX(ville) {
	requeteAJAX(ville, callback_4);
}