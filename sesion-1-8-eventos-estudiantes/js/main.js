const formulario = document.querySelector("#formularioProducto");
const nombreProducto = document.querySelector("#nombreProducto");
const precioProducto = document.querySelector("#precioProducto");
const categoriaProducto = document.querySelector("#categoriaProducto");

const previewNombre = document.querySelector("#previewNombre");
const previewCategoria = document.querySelector("#previewCategoria");
const mensajeEstado = document.querySelector("#mensajeEstado");
const productosLista = document.querySelector("#productosLista");
const contadorProductos = document.querySelector("#contadorProductos");
const historialEventos = document.querySelector("#historialEventos");

let totalProductos = 0;

// --- TODO 1: Evento input en tiempo real ---
nombreProducto.addEventListener("input", (e) => {
    previewNombre.textContent = e.target.value || "Sin nombre";
});

// --- TODO 2: Evento change en el select ---
categoriaProducto.addEventListener("change", (e) => {
    previewCategoria.textContent = e.target.value || "Ninguna";
});

// --- TODO 3: Evento keydown para teclas especiales ---
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        mensajeEstado.textContent = "Has presionado Escape. Estado reseteado.";
        mensajeEstado.style.color = "black";
    }

    else if (e.key === "Enter") {
        mensajeEstado.textContent = "Has presionado Enter. Formulario enviado.";
        mensajeEstado.style.color = "black";
        formulario.dispatchEvent(new Event("submit"));
    }
});

// --- TODO 4: Control de formulario ---
formulario.addEventListener("submit", (e) => {
    e.preventDefault(); 

    if (!nombreProducto.value || !precioProducto.value || !categoriaProducto.value) {
        mensajeEstado.textContent = "¡Error: Debes completar todos los campos!";
        mensajeEstado.style.color = "red";
        return;
    }

    const producto = {
        nombre: nombreProducto.value,
        precio: precioProducto.value,
        categoria: categoriaProducto.value
    };

    crearTarjetaProducto(producto);
    
    // TODO 6: Emisión del Evento Personalizado
    const eventoCustom = new CustomEvent("producto:agregado", {
        detail: producto
    });
    document.dispatchEvent(eventoCustom);

    formulario.reset();
    previewNombre.textContent = "Sin nombre";
    previewCategoria.textContent = "Ninguna";
});

// --- TODO 5: Función de creación dinámica ---
function crearTarjetaProducto(producto) {
    const article = document.createElement("article");
    article.classList.add("card-producto"); 
    article.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio}</p>
        <p>Categoría: ${producto.categoria}</p>
        <button class="btn-eliminar">Eliminar</button>
    `;

    article.querySelector(".btn-eliminar").addEventListener("click", () => {
        article.remove();
        totalProductos--;
        contadorProductos.textContent = totalProductos;
    });

    productosLista.appendChild(article);
}

// --- TODO 7: Escucha del Evento Personalizado---
document.addEventListener("producto:agregado", (e) => {
    const { nombre, precio } = e.detail;
    totalProductos++;
    contadorProductos.textContent = totalProductos;

    const registro = document.createElement("p");
    registro.classList.add("evento-item");
    registro.textContent = `Registro: Se agregó ${nombre} por valor de $${precio}`;
    historialEventos.appendChild(registro);
});
