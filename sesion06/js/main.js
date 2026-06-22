const mensaje = document.querySelector("#mensaje");
const btnTextContent = document.querySelector("#btnTextContent");
const btnInnerHTML = document.querySelector("#btnInnerHTML");
const btnLimpiar = document.querySelector("#btnLimpiar");
const btnAlternar = document.getElementById("btnAlternar");
const btnVerificar = document.getElementById("btnVerificar");
const btnReemplazarClase = document.getElementById("btnReemplazarClase");
const enlace = document.querySelector("#enlace");
const btnLeer = document.querySelector("#btnLeer");
const btnCambiar = document.querySelector("#btnCambiar");
const botonEnviar = document.querySelector("#botonEnviar");
const btnHabilitar = document.querySelector("#btnHabilitar");

btnTextContent.addEventListener("click", function () {
    mensaje.textContent = "¡Hola estudiantes DOM con textContent!";
    mensaje.className = "resultado-texto";
});

btnInnerHTML.addEventListener("click", function () {
    mensaje.innerHTML = "¡Hola estudiantes <strong>DOM</strong> con innerHTML!";
    mensaje.className = "resultado-html";
});

btnLimpiar.addEventListener("click", function () {
    mensaje.textContent = "Mensaje inicial";
    mensaje.className = "resultado-limpio";
});

function alternarMensaje() {
    mensaje.classList.toggle("oculto");
}

function verificarClase() {
    if (mensaje.classList.contains("resultado-html")) {
        console.log("El mensaje tiene estilo de innerHTML");
        alert("El mensaje tiene estilo de innerHTML");
    } else {
        console.warn("El mensaje NO tiene estilo de innerHTML");
        alert("El mensaje NO tiene estilo de innerHTML");
    }
}

function reemplazarClase() {
    if (mensaje.classList.contains("resultado-texto")) {
        mensaje.classList.replace("resultado-texto", "resultado-html");
        mensaje.innerHTML = "Ahora el mensaje cambió de estilo";
    } else {
        alert("Primero usa el botón textContent para aplicar la clase resultado-texto");
    }
}

btnAlternar.addEventListener("click", alternarMensaje);
btnVerificar.addEventListener("click", verificarClase);
btnReemplazarClase.addEventListener("click", reemplazarClase);

btnLeer.addEventListener("click", function () {
    const valorHref = enlace.getAttribute("href");

    console.log("El href del enlace es:", valorHref);
    alert("El href del enlace es: " + valorHref);
});

btnCambiar.addEventListener("click", function () {
    enlace.setAttribute("href", "https://www.wikipedia.org");
    enlace.textContent = "Ir a Wikipedia";
    console.log("El enlace fue cambiado");
});

btnHabilitar.addEventListener("click", function () {
    botonEnviar.removeAttribute("disabled");
    console.log("El atributo disabled fue eliminado");
});

botonEnviar.addEventListener("click", function () {
    alert("Botón Enviar Habilitado");
});