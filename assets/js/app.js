window.addEventListener("load", function(){
	document.body.insertBefore(crearCanchaDeportiva(),document.body.firstChild);
});

function crearCanchaDeportiva(){
	var divConClass = function(clase){
		console.log(clase);
		var arrayClass = clase.split(" ");
		console.log(arrayClass);
		var div =document.createElement("div");
		arrayClass.forEach(function(elem){
			div.classList.add(elem);
		});
		

		return div;
	};

	var docFragment = document.createDocumentFragment();

	var divCancha = divConClass("cancha");
	var divBorder = divConClass("border-cancha");
	var arcoDerecho = divConClass("arco arco-derecha");
	var jugadorDerecho = divConClass("circulo jugador jug-derecha");
	var arcoIzquierdo = divConClass("arco arco-izquierda");
	var jugadorIzquierdo = divConClass("circulo jugador jug-izquierda");
	var circuloCentro = divConClass("circulo centro");
	var jugadorCentro = divConClass("circulo jugador jug-centro");

	arcoDerecho.appendChild(jugadorDerecho);
	arcoIzquierdo.appendChild(jugadorIzquierdo);

	divBorder.appendChild(arcoDerecho);
	divBorder.appendChild(arcoIzquierdo);
	divBorder.appendChild(circuloCentro);
	divBorder.appendChild(jugadorCentro);

	divCancha.appendChild(divBorder);

	return docFragment.appendChild(divCancha);
}
