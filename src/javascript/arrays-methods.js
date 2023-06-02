// Clase 2 de React 

// Meotodo Map() ---------------------------------
const nombres = ['Juan', 'Pedro', 'Marta'];

const saludando = nombres.map(item => `Bienvenidx ${item}`);

console.log(nombres)
console.log(saludando)


// Metodo reduce() --------------------------------
const numeros = [4, 10, 2, 6, 8, 2];

let suma = numeros.reduce((acc, elementos) => acc + elementos);

console.log(suma); 


// For of --------------------------------
const numeritos = [20, 33, 40, 60, 100]

for(let valor of numeritos){
 let iterable = valor + 1
 console.log(iterable)
} 

//Metodo Filter() ------------------------------------
const empleados = [20, 33, 40, 60, 100]

const numerosFind = empleados.filter(i => i > 30);
console.log(empleados)
console.log(numerosFind) 
