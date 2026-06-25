    //Doble clic
    let miInput = document.getElementById("miInput");
    miInput.setAttribute("ondblclick", "alert('¡Doble clic detectado!')");

    //Cambio de contenido
    let miCampoTexto = document.getElementById("miCampoTexto");
    miCampoTexto.setAttribute("onchange", "alert('Has cambiado el texto')");

    //Pasar el mouse
    let miImagen = document.getElementById("miImagen");
    miImagen.setAttribute("onmouseover", "alert('El mouse está sobre la imagen')");

    //Presionar una tecla
    /*document.addEventListener("keydown", function() {
        alert('Has presionado una tecla');
    });*/

    //addEventListener
    const miBoton = document.getElementById("miBoton");
    miBoton.addEventListener("click", function() {
        alert('Botón clickeado usando addEventListener');
    });


    ///////////////////////////////////////////////////////////////////////////

    function saludarDesdeHtml(){
        const mensaje = document.querySelector("#mensajeHtml");
        mensaje.textContent = "¡Hola desde HTML! que tal este evento";
    };

    btnPropiedad.onclick = function () {
        mensajePropiedad.textContent = "Hola desde la propiedad onclick";
        };

    btnListener.addEventListener("click", function () {
        mensajeListener.textContent = "Hola desde addEventListener";
    });

    botonE.addEventListener("click", function (event) {
        console.log("tipo: ", event.type);
        console.log("target: ",event.target);
    });

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Formulario controlado con JavaScript");
    const df = new FormData(formulario);
    console.log("Nombre:", df.get("nombre"));
    console.log("Email:", df.get("email"));

    eventoPersonalizado(df.get("nombre"), df.get("email"));
    formulario.reset();
});

function eventoPersonalizado(nombre, email) {
    const eventoUsuarioAgregado = new CustomEvent("usuario:agregado", {
        detail: { nombre: nombre,
                    email: email },
    });
    document.dispatchEvent(eventoUsuarioAgregado);
};
document.addEventListener("usuario:agregado", function (event) {
    const usuario = event.detail;

    const item = document.createElement("li");
    item.textContent = usuario.nombre + " - " + usuario.email;
    item.classList.add("usuario-destacado");

    listaUsuarios.append(item);
});