//Ejercicio2
var myArray = [
    {firstName: "David"},
    null,
    22,
    2,
    {nameOfBrothers: "Alejandro y Carlos"},
    true,
    true,
    undefined, 
    false,
    false
]

console.log(myArray[0]) //object
console.log(myArray[1]) //null
console.log(myArray[2]) //number
console.log(myArray[3]) //number
console.log(myArray[4]) //object
console.log(myArray[5]) //boolean

console.log(myArray.length)

/**
 * Ejercicio 3
 * 1.- Sobre el arreglo que hicimos con 10 elementos
 * 2.- Crear un for que imprima cada elemento de su arreglo
 * 3.- Quiero que me imprima del ultimo al primero [1,2,3,4] => [4,3,2,1]
 * Tiempo: 10min
 */

for (let i = 0; x < myArray.length; x--) {
    const element = myArray[x];
    console.log(element)
}



