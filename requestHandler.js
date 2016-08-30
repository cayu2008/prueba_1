function iniciar(){
	console.log("Llamada a la funcion INICIAR");
	return "Hola funcion Iniciar";
}

function subir(){
	console.log("Llamada a la funcion SUBIR");
	return "Hola funcion Subir";
}

exports.iniciar = 	iniciar;
exports.subir	=	subir;