// PUNTOS DEL RETO
//
// 1. Crear una función que imprima por consola los nombres de los familiares
//    de la persona con mayor edad.
//
// 2. Cree una función que imprima las habilidades de la persona con mayor numero
//    de familiares.
//
// 3. Diseñar una clase que permita crear objetos persona (con nombre, edad,
//    habilidades y familia)
//
// Nota: Para el desarrollo del reto se le daran unos datos de prueba que podra usar para
//       la solución, pero durante la calificación se utilizaran otros datos.

//DATOS DE PRUEBA



const personas = {

	1: {
		nombre: 'Fulanita',
		edad: 21,
		habilidades: ['Programación', 'Videojuegos', 'Deportes'],
		familia: [4, 6, 88],
	},
	2: {
		nombre: 'Pepito',
		edad: 25,
		habilidades: ['Juegos de mesa', 'Deportes'],
		familia: [4, 5],
	},
	88: {
		nombre: 'Juana',
		edad: 15,
		habilidades: ['Dibujo', 'Juegos de mesa', 'Lectura'],
		familia: [1],
	},
	4: {
		nombre: 'David',
		edad: 44,
		habilidades: ['Lectura'],
		familia: [1, 2],
	},
	5: {
		nombre: 'Hurtado',
		edad: 40,
		habilidades: ['Programación', 'Videojuegos'],
		familia: [2, 6],
	},
	6: {
		nombre: 'Lauren',
		edad: 32,
		habilidades: ['Diseño', 'Deportes'],
		familia: [1, 5],
	},
};

let objeto = Object.entries(personas);

// Solucion del primer Reto

let familiaDeMayor = () => {
	let edades = [];
	let edadMayor;
	let mayorEdad = objeto.map((element) => {
		edades.push(element[1].edad)
		edadMayor = Math.max(...edades)
	})

	let famliares = objeto.filter((element) => {
		element[1].edad == edadMayor ? 
		console.log(`Familiares de Persona con mayor edad : ${element[1].familia}`) 
		: "No se encontro :("
		
	})
}

// Solucion del segundo Reto

let habilidades = () => {

	numFamiliares = []
	let famliares = objeto.filter((element) => numFamiliares.push(element[1].familia.length))
	let numeroMayorFamlia = Math.max(...numFamiliares)
	let habilidades	= objeto.filter((element) => {
		(element[1].familia.length == numeroMayorFamlia) ?
		console.log(`Las habilidades de la persona con mayor numero de familiares son : ${element[1].habilidades}`)
		: ""
	})
}

// Solucion del tercer Reto

class Persona{
	constructor(nombre, edad, habilidades, familia){
	this.nombre = nombre;
	this.edad = edad;
	this.habilidades = habilidades;
	this.failia = familia;
	}
}


habilidades();		// Funcion Numero 2 del reto
familiaDeMayor();	// Funcion Numero 1 del Reto

// Crear objetos Persona
let perosna1 = new Persona("Carlos", 19, ["Programar", "Ajedrez", "Diseñar"], [5,3])
console.log(perosna1);