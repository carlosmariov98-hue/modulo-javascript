console.log("Hola Mundo");

// Variables con let y const

const nombre = "Ana";
let edad = 18;

edad = 19;

console.log(nombre); // Ana
console.log(edad); // 19

//operadores y numeros

//Tipos de operadores

Aritméticos

+ - * / % ** → precio * cantidad

Asignación

= += -= → total += 5000

Comparación

=== !== > < >= <= → edad >= 18

Lógicos

&& || ! → tieneEdad && tieneDocumento//</>

const precio = 50000;
const cantidad = 2;
const subtotal = precio * cantidad;
const aplicaDescuento = subtotal >= 100000;

console.log(subtotal); // 100000
console.log(aplicaDescuento); // true

const precioTexto = "15000";
const total = Number(precioTexto) * 3;
console.log(total); // 45000
console.log(Number("hola")); // NaN

//cadenas de texto 

const producto = "  teclado gamer  ";

producto.trim();        // "teclado gamer"
producto.toUpperCase(); // "  TECLADO GAMER  "
producto.includes("gamer"); // true
producto.trim().slice(0, 7); // "teclado"

//arrays

const tecnologias = ["HTML", "CSS", "JavaScript"];

console.log(tecnologias[0]);    // HTML
console.log(tecnologias.length); // 3
console.log(tecnologias.includes("JavaScript")); // true

//objetos

const producto2 = {
    nombre: "Teclado",
    precio: 120000,
    disponible: true
};

console.log(producto2.nombre);
console.log(producto2.precio);
console.log(producto2.disponible);

//funciones

function calcularTotal(precio, cantidad) {
    return precio * cantidad;
}

const totalCalculado = calcularTotal(50000, 2);
  console.log(totalCalculado); // 100000