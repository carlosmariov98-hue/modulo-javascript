const titulo = document.querySelector("#titulo");
const boton = document.querySelector("#boton");

/*boton.addEventListener("click", () => {
    titulo.textContent = "¡Hola Mundo Script!";
}   ); */

boton.addEventListener("mouseover", () => {
    titulo.textContent = "¡Hola Mundo Script!";
});

//volver al titulo inicial

boton.addEventListener("mouseout", () => {
    titulo.textContent = "¡Bienvenido a javaScript!";
});