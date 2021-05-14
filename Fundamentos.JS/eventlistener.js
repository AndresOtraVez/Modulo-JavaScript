// Event listeners
document.getElementById("my-title").addEventListener('click', () => {
    const nombre = prompt("Cual es tu nombre?")
    console.log("Nombre ===>", nombre)
  })
  
  /**
   * Ejercicio 1
   * 1.- Sobre el label de globo
   * 2.- usando event listeners, inflar el globo
   * Tiempo: 5min
   */
  
  const labelGlobo = document.getElementById("globo")
  let ballonSize = 10
  
  labelGlobo.addEventListener('click', () => {
    // ballonSize = ballonSize + 5
    ballonSize += 5
    console.log("Llamando globo", ballonSize)
    // labelGlobo.style.fontSize = ballonSize + "px"
    // labelGlobo.style.fontSize = `${ballonSize}px`
    labelGlobo.style.cssText = `cursor: pointer; font-size: ${ballonSize}px;`
  })
  
  /**
   * Ejercicio 2
   * 1.- Sobre un nuevo event listener
   * 2.- escoger en un nuevo mouse event y decrementar el tamaño de mi globo
   * Tiempo: 
   */
  
