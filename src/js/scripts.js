let div_autocp = document.getElementById("autocompletion");
let input = document.getElementById("ville");
let selectCont = document.getElementById("continent");
let selectPays = document.getElementById("pays");

input.addEventListener('input', function() {
	maRequeteAJAX(input.value);
});

div_autocp.addEventListener('click', function() {
	console.log(event.target.innerHTML);
	input.value = event.target.innerHTML;
	videVilles();
});


document.addEventListener("DOMContentLoaded", function() {
	chargerSelecteurContinents();
});

selectCont.addEventListener("change", function() {
	chargerSelecteurPays();
})

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
	while (div_autocp.children.length > 0) {
		div_autocp.removeChild(div_autocp.children[0]);
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

function chargerSelecteurContinents() {
	let option1 = document.createElement("option");
	option1.selected = true;
	option1.disabled = true;
	option1.innerHTML = "Choisissez un continent";
	selectCont.appendChild(option1);
	for (var i = 0; i < Object.keys(countries).length; i++) {
		let option = document.createElement("option");
		option.innerHTML = Object.keys(countries)[i];
		selectCont.appendChild(option);
	}
}

function chargerSelecteurPays() {

	selectPays.innerHTML = "";

	let continent = selectCont.value;
	let pays = countries[continent];
	let option1 = document.createElement("option");
	option1.selected = true;
	option1.disabled = true;
	option1.innerHTML = "Choisissez un pays";
	selectPays.appendChild(option1);
	for (var i = 0; i < pays.length; i++) {
		let option = document.createElement("option");
		option.innerHTML = pays[i];
		selectPays.appendChild(option);
	}
}