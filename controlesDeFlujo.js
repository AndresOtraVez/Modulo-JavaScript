// Controles de flujo

// Hardcode. Es agregar valores directamente al codigo.


var a = 10
var b = 50

// console.log('a > b ==>', a > b)

// if (a > b) {
//   console.log("El número es mayor")
// } else {
//   console.log("El número es menor")
// }

/**
 * If lo que evalua es un boleano (true o false)
 * Si es true, ejecuta el primer bloque
 * {
    console.log("El número es mayor")
  }
 * 
  si es falso entonces ejecuta el bloque del "else"
  else {
    console.log("El número es menor")
  }
 */

// Valores truthys o falseys

// Truthy
// var myNumber = -10
// var myNumber = 20
// var myNumber = "Hola Mundo"
// var myBolean = true
// var myObject = {nombre: "Bryan"}
// var myObject = {}
// var myArray = [1,2,3]
// var myArray = []


// Falsey 
// var myNumber = 0
// var myString = ""
// var myBolean = false
// var myUndefined = undefined
// var myNull = null
// var myNan = NaN

// var myNumber = -10

// if (myNumber) {
//   console.log("Truthy")
// } else {
//   console.log("Falsey")
// }



// if (3 !== "3") {
//   console.log('3 == "3" es diferente')
// } else {
//   console.log('3 == "3" no es diferente')
// }

// if (3 === "3") {
//   console.log('3 === "3" es truthy')
// } else {
//   console.log('3 === "3" es falsey')
// }





// if (10 < 10) {
//   console.log('10 < 10 es verdadero')
// } else {
//   console.log('10 < 10 es falso')
// }

/**
 * Ejercicio 2
 * 1 .- Vamos a crear condiciones usando if y utilizando cada uno de los operadores logicos (8)
 * 2.- Crear condiciones con 3 truthys y 3 falseys (6)
 * Tiempo 15 minutos.
 */


var a = 20
var b = 30
var c = 5
var d = 5
var e = ""
var f = {}
var g = null
var h = undefined
var i = "HelloWorld"

//Igualdad
if (a == b) {
    console.log("El número es igual")
 } else {
      console.log("El número es diferente")
    }

//Diferente 
if (a != b) {
    console.log("Número Diferente")
 } else {
      console.log("Número Igual")
    }

//EstrictamenteIguales
if (9 === "9") {
    console.log('3 === "3" es truthy')
} else {
    console.log('3 === "3" es falsey')
}

//EstrictamenteDesiguales 
if (9 !== "9") {
    console.log('9 === "9" es truthy')
} else {
    console.log('9 === "9" es falsey')
}

//MayorQue
if (a > b) {
    console.log('5 > 4 Verdadero')
} else {
    console.log('5 > 4 Falso')
}

//MenorQue 
if (a < b) {
    console.log('5 < 4 Verdadero')
} else {
    console.log('5 < 4 Falso')
}

//MayorOIgualQue
if (c >= d) {
    console.log('Verdadero')
} else {
    console.log('Falso')
}

//MenorOIgualQue
if (c <= d) {
    console.log('Verdadero')
 } else {
    console.log('Falso')
}

//Truthy
if (f) {
    console.log('Truthy')
} else {
    console.log('Falsey')
}

if (i) {
    console.log('Truthy')
} else {
    console.log('Falsey')
}

if (a) {
    console.log('Truthy')
} else {
    console.log('Falsey')
}

//Falsey

if (e) {
    console.log('Truthy')
} else {
    console.log('Falsey')
}

if (g) {
    console.log('Truthy')
} else {
    console.log('Falsey')
}

if (h) {
    console.log('Truthy')
} else {
    console.log('Falsey')
}


// Condiciones ternarias 
// La condición regular la podemos representar de la siguiente manera
// if (a === a){
//    console.log(1)
//}else{
//    console.log(2)
//}

// Condicion terminaria se puede representar de la siguiente manera

a === a ? 1 : 0


/*switch (mes) {
    case "enero":
        console.log("El mes es enero")
      break
      case "febrero":
        console.log("El mes es febrero")
      break
      default: 
        console.log("El mes no fue encontrado")
    */

    
    
    /**
     * Ejercicio 3
     * 1.- Hacer un switch que responde el color de ropa
     * 2.- Enviar un color
     * 3.- Los cases tendrán diferentes colores. Al menos 6 colores distintos
     * 4.- Van a imprimir de que color es la ropa
     * 10 minutos
     */


var color = 'rojo'

switch (color) {
    case 'azul':
        console.log('color azul')
        break
    case 'verde':
        console.log('color verder')
        break
    case 'amarillo':
        console.log('color amarillo')
        break
    case 'morado':
        console.log('color morado')
        break
    case 'cafe':
        console.log('color cafe')
        break
    case 'rojo':
        console.log('color rojo')
        break
    default:
        console.log('color no fue encontrado')
}