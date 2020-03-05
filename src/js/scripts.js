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
