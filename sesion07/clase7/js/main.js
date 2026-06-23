    const contendorProductos = document.querySelector("#contenedor-productos");
    const titulo = document.querySelector("#titulo");

    const btnAppend = document.querySelector("#btnAppend");
    const btnPrepend = document.querySelector("#btnPrepend");
    const btnBefore = document.querySelector("#btnBefore");
    const btnAfter = document.querySelector("#btnAfter");
    const btnRemove = document.querySelector("#btnRemove");
    const btnReplaceChildren = document.querySelector("#btnReplaceChildren");
    const btnReplaceWith = document.querySelector("#btnReplaceWith");

    // Event Listener para btnAppend (Agrega al final del contenedor)
    btnAppend.addEventListener("click", function () {
    const producto = document.createElement("article");
    producto.textContent = "Producto agregado al final: Mouse";
    producto.classList.add("producto");
    contendorProductos.append(producto);
    });

    // Event Listener para btnPrepend (Agrega al principio del contenedor)
    btnPrepend.addEventListener("click", function () {
    const producto = document.createElement("article");
    producto.textContent = "Producto agregado al inicio: Teclado";
    producto.classList.add("producto");
    contendorProductos.prepend(producto);
    });

    // Event Listener para btnBefore (Inserta antes del elemento referenciado)
    btnBefore.addEventListener("click", function () {
    const mensaje = document.createElement("p");
    mensaje.textContent = "Mensaje insertado antes del título";
    mensaje.classList.add("mensaje");
    titulo.before(mensaje);
    });

    // Event Listener para btnAfter (Inserta después del elemento referenciado)
    btnAfter.addEventListener("click", function () {
    const mensaje = document.createElement("p");
    mensaje.textContent = "Mensaje insertado después del título";
    mensaje.classList.add("mensaje");
    titulo.after(mensaje);
    });



    btnRemove.addEventListener("click", function () {
        const primerProducto = document.querySelector(".producto");
        if (primerProducto) {
        primerProducto.remove();
    } else {
        alert("No hay productos para eliminar");
        }
    });
        
    btnReplaceChildren.addEventListener("click", function () {
        const nuevoProducto1 = document.createElement("article");
        nuevoProducto1.textContent = "Nuevo producto: Monitor";
        nuevoProducto1.classList.add("producto-destacado");
        nuevoProducto1.classList.add("producto");
        
        const nuevoProducto2 = document.createElement("article");
        nuevoProducto2.textContent = "Nuevo producto: Impresora";
        nuevoProducto2.classList.add("producto-destacado");
        nuevoProducto2.classList.add("producto");
        
        contendorProductos.replaceChildren(nuevoProducto1, nuevoProducto2);
    });
        
        btnReplaceWith.addEventListener("click", function () {
            const primeraTarjeta = contendorProductos.firstElementChild;
        
            if (primeraTarjeta) {
            const nuevaTarjeta = document.createElement("article");
            nuevaTarjeta.textContent = "Tarjeta reemplazada: Producto Premium";
            nuevaTarjeta.classList.add("producto-destacado");
            nuevaTarjeta.classList.add("producto");
            
            primeraTarjeta.replaceWith(nuevaTarjeta);
        }
        
        else {
        alert("No hay tarjeta para reemplazar");
        }
    });