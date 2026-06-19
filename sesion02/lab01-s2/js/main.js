//const metodoPago = prompt("Ingrese el método de pago (efectivo, tarjeta, nequi):").toLowerCase();

/*switch (metodoPago) {
    case ("efectivo"):
            console.log("Pago en efectivo");
        break;
    case ("tarjeta"):
            console.log("Pago con tarjeta");
        break;
    case ("nequi"):
            console.log("Pago con nequi");
        break;
    default:
            console.log("Método de pago no válido");
}*/


///////////////////////////////////////////////////////////

function calculartotal(precio, cantidad) {
    return precio * cantidad;
}
const precio = parseFloat(prompt("Ingrese el precio del producto:"));
const cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));
const total = calculartotal(precio, cantidad);
console.log("El total a pagar es: " + total);
