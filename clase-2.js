
/*    Reto 1: Fibonnaci     */

let n = 10
let actual = 0
let siguiente = 1
console.log("Sucesión de Fibonnaci")
for (let i = 0; i < n; i++) {
    if (i > 0) {
        aux = siguiente + actual
        actual = siguiente
        siguiente = aux
    }
    console.log(actual)
}

/*       Reto 2: Par o Impar      */

let n = 7
if (n % 2 == 0){
    console.log(`${n} es un numero par`)
}
else{
    console.log(`${n} es un numero impar`)
}

/*      Reto 3: Cuantas veces puedo sumar un numero en 100      */

let n = 5
let i = 0
let suma = n
while (suma <= 100) {
    suma += n
    i++
}  
console.log(`${n} se puede sumar ${i} veces`)