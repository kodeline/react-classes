//Clase 1

const persona = {
	nombre: "Juan",
	edad: 18, 
	ciudad: "Rosario"
};

console.log(typeof persona);

const cambiarPersona = JSON.stringify(persona);

console.log(typeof cambiarPersona);

const pasarObj = JSON.parse(cambiarPersona);

console.log(typeof pasarObj);


/*
const saludar = function (nombre) {
	console.log('Bienvenida ' + nombre)
}

const saludar = (nombre, curso) => `Bienvenida ${nombre} 
Aprende Programando
en el curso de ${curso}`;

console.log(saludar('Emilia Maria', 'React'));*/