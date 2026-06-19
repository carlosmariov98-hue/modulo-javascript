//JAVA SCRIPT SINCRONO

// Paso 1: Inicio
console.log("1. Preparando la masa para la pizza...");

// Paso 2: Ejecución síncrona (bloqueante)
function hornearPizza() {
    console.log("2. Metiendo la pizza al horno...");
    // Simulación de un proceso que toma tiempo de forma síncrona
    for (let i = 0; i < 999999999; i++) {} 
    return "Pizza horneada";
}

// Paso 3: Llamado a la función
let resultado = hornearPizza();
console.log("3. " + resultado);

// Paso 4: Fin
console.log("4. ¡La pizza está lista para servir!");

////////////////////////////////////////////////////////////////

//JAVA SCRIPT ASINCRONO

function paso2() {

    console.log("paso 2");
    }

console.log("Paso 1");

setTimeout(paso2, 2000);

console.log("Paso 3");

//Ejemplo con callback
function suma(num1, num2) {
    return num1 + num2;
};

function resta(num1, num2) {
    return num1 - num2;
};

function multiplicacion(num1, num2) {
    return num1 * num2;
};
function operaciones (num1, num2, resultado){
    console.log("Realizando la operación... ");
    return resultado(num1, num2);
};

console.log("suma: ", operaciones(5, 3, suma));
console.log("resta: ", operaciones(5, 3, resta));
console.log("multiplicacion: ", operaciones(5, 3, multiplicacion));

//////////////////////////////////////////////////////////////////////////////

setTimeout(function() {
    console.log("paso#1")
    setTimeout(function() {
        console.log("paso#2")
        setTimeout(function() {
            console.log("paso#3")
        }, 3000);
    }, 2000);
}, 1000);
