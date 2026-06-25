const btnCargar = document.querySelector("#btn-cargar");
const btnAgregarFinal = document.querySelector("#btn-agregar-final");
const btnAgregarInicio = document.querySelector("#btn-agregar-inicio");
const btnAviso = document.querySelector("#btn-aviso");
const btnResumen = document.querySelector("#btn-resumen");
const btnReemplazarPrimera = document.querySelector("#btn-reemplazar-primera");

const resumen = document.querySelector("#resumen");
const panelEquipos = document.querySelector("#panel-equipos");
const listaEquipos = document.querySelector("#lista-equipos");

function crearTarjetaEquipo(equipo) {
  const article = document.createElement("article");
  article.classList.add("card-equipo");
  if (equipo.destacado) article.classList.add("destacado");

  const h3 = document.createElement("h3");
  h3.textContent = equipo.nombre;
  
  const p1 = document.createElement("p");
  p1.textContent =equipo.continente;

  const p2 = document.createElement("p");
  p2.textContent =equipo.confederacion;

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar Equipo";
  btnEliminar.classList.add("btn-eliminar")
  btnEliminar.addEventListener("click", () => {
    article.remove();
    actualizarResumen(); 
  });

  article.append(h3, p1, p2, btnEliminar);
  return article;
} 

async function cargarEquipos() {
  try {
    const respuesta = await fetch("data/equipos.json");
    const datos = await respuesta.json();
    listaEquipos.replaceChildren();
    datos.equipos.forEach(eq => {
      listaEquipos.append(crearTarjetaEquipo(eq));
    });
    actualizarResumen();
  } catch (error) {
    console.error("Error al cargar equipos:", error);
  }
}

function agregarEquipoAlFinal() {
  const nuevo = { nombre: "Equipo Nuevo(congo)", descripcion: "Creado al final", destacado: false };
  listaEquipos.append(crearTarjetaEquipo(nuevo));
  actualizarResumen();
}

function agregarEquipoAlInicio() {
  const nuevo = { nombre: "Equipo TOP(Portugal)", descripcion: "Creado al inicio", destacado: true };
  listaEquipos.prepend(crearTarjetaEquipo(nuevo));
  actualizarResumen();
}

function insertarAviso() {
  const aviso = document.createElement("p");
  aviso.classList.add("aviso");
  aviso.textContent = "¡Atención: Lista actualizada recientemente!";
  panelEquipos.before(aviso);
}

function actualizarResumen() {
  const total = listaEquipos.children.length;
  const mensaje = document.createElement("p");
  mensaje.textContent = `Total de equipos en lista: ${total}`;
  resumen.replaceChildren(mensaje);
}

function reemplazarPrimeraTarjeta() {
  const primera = listaEquipos.firstElementChild;
  if (primera) {
    const reemplazo = crearTarjetaEquipo({ nombre: "REEMPLAZO #1", descripcion: "Nueva tarjeta", destacado: true });
    primera.replaceWith(reemplazo);
  }
}

// Listeners
btnCargar.addEventListener("click", cargarEquipos);
btnAgregarFinal.addEventListener("click", agregarEquipoAlFinal);
btnAgregarInicio.addEventListener("click", agregarEquipoAlInicio);
btnAviso.addEventListener("click", insertarAviso);
btnResumen.addEventListener("click", actualizarResumen);
btnReemplazarPrimera.addEventListener("click", reemplazarPrimeraTarjeta);