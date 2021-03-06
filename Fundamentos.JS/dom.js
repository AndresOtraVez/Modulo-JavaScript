/**
 * Ejercicio 1
 * 1.- Abrir distintas paginas web y acceder a los elementos HTML con las herramientas de desarrollador
 * Tiempo 10min
 */


 console.log("Hola Mundo DOM");

 // paragraphs contendrá un arreglo con los elementos HTML encontrados por getElementsByTagName
 var paragraphs = document.body.getElementsByTagName("p"); // array[p, p, p] sin metodos de array
 var paragraphs2 = document.querySelectorAll("p"); // array[p, p, p] con metodos de array

 console.log("paragraphs ===>", paragraphs);
 console.log("paragraphs2 ===>", paragraphs2);

 /**
  * Ejercicio 2
  * 1.- Cambiar el valor de cada uno de los elementos <p> usando JS
  * 2.- Iterar sobre los elementos de HTML y cambiar su valor
  * Tiempo: 8min
  */

 // forEach no devuelve un arreglo, solo itera sobre todos los elementos
 // podría utilizar forEach con paragraphs2
 paragraphs2.forEach((p, index) => {
   p.innerText = `El contenido es: ${p.innerText} y se encuentra en la posición ${index}`;
 });

 // // Utilizaría un for con paragraphs
 // for (let i = 0; i < paragraphs2.length; i++) {
 //    const element = paragraphs2[i];
 //    element.innerText = `El contenido es: ${element.innerText} y se encuentra en la posición ${i}`
 //  }

 // Utilizaría un for con paragraphs
 // for (let i = 0; i < paragraphs.length; i++) {
 //   const element = paragraphs[i];
 //   element.innerText = `El contenido es: ${element.innerText} y se encuentra en la posición ${i}`;
 // }



// Crear nuevos elementos de HTML
// 1.- Crear el elemento de HTML que deseo. En este caso un paragraph nuevo
const myNewParagraph = document.createElement("p") // <p></p>

// 2.- Agregamos un nodo de texto y lo guardamos en una variable
const textParagraph = document.createTextNode("Hola Mundo") // "Hola Mundo"

// A paragraph estoy agregando el texto <p></p> agregale "Hola Mundo" adentro 
// 3.- Agregamos el texto al <p></p>
myNewParagraph.appendChild(textParagraph)

// 4.- Agregamos myNewParagraph => <body> <p>"Hola Mundo"</p> </body>
document.body.appendChild(myNewParagraph)

// setAttribute

/**
 * ==== Tarea ====
 * Ejercicio 3
 * 1.- Crear un anchor (para los links) a partir de JS
 * 2.- El anchor debe dirigir a google.com
 * 3.- El anchor debe contener texto que diga "Buscar en Google"
 * Tiempo: 8min
 */
const myNewAnchor = document.createElement("a") // <a></a>
const anchorText = document.createTextNode("Buscar en Google") // "Buscar en Google"
const hrefAnchor = myNewAnchor.setAttribute("href", "https://google.com") // <a href="https://google.com"></a>  se agrega el atributo dentro del anchor
myNewAnchor.appendChild(anchorText) // <a href="https://google.com">Buscar en Google</a> Se agrega el texto dentro del anchor
document.body.appendChild(myNewAnchor) // <body> <a href="https://google.com">Buscar en Google</a> </body>se agrega el anchor al body del HTML

/**
 * === Tarea 2 ===
 * // https://www.w3schools.com/html/html_tables.asp
 * 1.- Crear una tabla con THEAD y TBODY usando Javascript 2 Columnas y 3 Filas
 * _____________________________________
 * |_________________|_________________|
 * |_________________|_________________|
 * |_________________|_________________|
 *
 * 2.- A la tabla vacia agregar estilos y atributos que agreguen estilo a las celdas
 * 3.- Agregarla dentro de un div con ID "container"
 */

const table = document.createElement("table") // <table></table>
const tableHead = document.createElement("thead") // <thead></thead>
const headerArray = [1, 2]

headerArray.forEach((num) => {
  const headCell = document.createElement("th") // <th></th>
  const textNode = document.createTextNode(num) // ""
  headCell.appendChild(textNode) // <th>""</th>
  tableHead.appendChild(headCell) // <thead><th>""</th> <th>""</th> <th>""</th></thead>
})

table.appendChild(tableHead) // <table> <thead>  <th>""</th> <th>""</th> <th>""</th>  </thead> </table>

const tbody = document.createElement("tbody") // <tbody></tbody>

const rowsArray = [1, 2, 3]


rowsArray.forEach(() => {
  // Primer foreach ayuda a agregar info en las filas
  const row = document.createElement("tr") // <tr></tr>

  // segundo foreach ayuda a poner la info en las columnas
  headerArray.forEach((num2) => {
    const cell = document.createElement("td") // <td></td>
    const textNode = document.createTextNode(num2) // "1"
    cell.appendChild(textNode) // <td>1</td>
    row.appendChild(cell) // <tr><td>1</td></tr>
  })

  tbody.appendChild(row) //  <tbody><tr><td>1</td></tr></tbody>
})


table.appendChild(tbody) // <table> <thead>  <th>""</th> <th>""</th> <th>""</th>  </thead> <tbody><tr><td>1</td></tr></tbody> </table>


table.setAttribute("border", "5px") // Agrega atributos
table.style.border = "1px solid blue"
table.style.width = "500px"
table.style.height = "300px"

table.setAttribute("id", "my-table")

// "table": {
//   border: "1px solid blue"
// }

document.body.appendChild(table)

// const myTable = document.getElementById("my-table")