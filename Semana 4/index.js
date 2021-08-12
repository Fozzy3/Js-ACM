/* 
Reto
Crear una función que reciba un arreglo de números por parámetro,
eleve cada uno al cuadrado, filtre el arreglo para que queden
solo números pares, divida cada elemento de ese arreglo en 2 y
retorne un true si el ultimo arreglo contiene algún numero múltiplo
de 3, de lo contrario false. */



let arreglo = [1,2,3,4,5,6,7,8,9];
let potencia = []; 
let pares = [];
let divididos = [];
let ultimo

potencia = arreglo.map( (x) => {return x**2})
pares = potencia.filter(number => number%2==0)
divididos = pares.map( (x) => {return x/2})
ultimo = (divididos[divididos.length-1]%3 == 0)

console.log(`             Arreglo Inicial : ${arreglo}
             Potencia : ${potencia}
             Pares : ${pares}
             Divididos : ${divididos}
             Retorna: ${ultimo} `)

