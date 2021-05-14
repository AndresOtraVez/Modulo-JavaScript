// Programación orientada a objetos
// Sesión 5
// Paradigma: Es un modelo a seguir para resolver una problematica.


// Modelos/Paradigmas 
// Programación imperativa. Programación orientada a objetos
// Describe paso a paso un conjunto de instrucciones para solucionar un problema.


// class define y crea una clase.


// class Person {

//     constructor (name) {
//       this.name = name
//       this.isAlive = true
//     }
  
//     saludo() {
//       return `Hola me llamo ${this.name}`
//     }
//   }
  
  // new crea una instancia de una clase
//   const Bryan = new Person("Bryan")
  
//   const Marcos = new Person("Marcos")
  
//   console.log("Bryan ==>", Bryan.saludo())
//   console.log("Marcos ===>", Marcos)
  
  // Programación declarativa. Programación funcional
  // Está basado en funciones
  
  /**
   * Ejercicio 1
   * 1.- Crear una clase Person
   * 2.- Vamos a crear un metodo que salude con nuestro nombre
   * 3.- Vamos a crear un metodo que diga que edad tenemos
   * Tiempo: 10min
   */



   class Person {

    constructor (name, age) {
      this.name = name
      this.isAlive = true
      this.age = age
    }
  
    saludo() {
      return `Hola me llamo ${this.name}` 
    }

    get obtenerCounter() {
        return this.counter
    }
    
    age() {
        return `Mi edad ${this.age}`
    }
  }

  const Andres = new Person('Andres', 22)

  console.log(Andres.saludo())
  console.log(Andres.age())


/**
 * Ejercicio 2
 * 1.- Sobre la misma clase que tienen
 * 2.- Crear un getter que devuelva la cantidad de veces que han mandado a ejecutar "saludar()"
 * 3.- Crear un getter que también devuelva la cantidad de veces que han mandado a ejecutar "edad()"
 * Tiempo: 10min
 */