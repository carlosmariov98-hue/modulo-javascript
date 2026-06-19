const mipromesa = new Promise((resolve, reject) => {
    console.log("Ejecutando promesa...");
    const exito = true;
    if (exito) {
        resolve("¡La promesa se cumplió!");
    } else{ 
        reject("¡La promesa se rechazó!");
    }
});

mipromesa.then((resultado) => {
    console.log("Felicidades: ", resultado);
}).catch((error) => {   
    console.error("error: ", error);
}).finally(() => {
    console.log("Promesa finalizada.");
});

const mipromesa2 = new Promise((resolve, reject) => {
    console.log("Ejecutando promesa...");
    const exito = true;
    if (exito) {
        resolve("¡La promesa se cumplió 2!");
    } else{ 
        reject("¡La promesa se rechazó 2!");
    }
});

mipromesa2.then((resultado) => {
    console.log("Felicidades: ", resultado);
}).catch((error) => {   
    console.error("error: ", error);
}).finally(() => {
    console.log("Promesa 2 finalizada.");
});

const mipromesa3 = new Promise((resolve, reject) => {
    console.log("ejecutando promesa 3...");

    fetch("data/equipos_mundial_2026.json").then(r => r.json()).then((data) => {
        console.log("Typeof data: ", typeof data);
        console.log("Data: ", data);
        console.table(data.grupos);
        });

        const exito = true;
        if (exito) {
            resolve("¡La promesa se cumplió 3!");
        } else{ 
            reject("¡La promesa se rechazó 3!");
        }
    });

    mipromesa3.then((resultado) => {
        console.log("Felicidades: ", resultado);
    }).catch((error) => {   
        console.error("error: ", error);
    }).finally(() => {
        console.log("Promesa 3 finalizada.");
    });

Promise.all([mipromesa, mipromesa2, mipromesa3]).then((resultados) => {
    console.log("Resultados de todas las promesas: ", resultados);
}   ).catch((error) => {
    console.error("Error en alguna de las promesas: ", error);
}).finally(() => {
    console.log("Todas las promesas han finalizado.");
});

async function cargarEquiposMundial(){
    const respuesta = await fetch("data/equipos_mundial_2026.json");
    const datos = await respuesta.json();
    console.log(typeof datos);
    console.log(datos);
    const equiposGrupoA = datos.equipos.filter(equipo => equipo.grupo === "A");
    console.table(equiposGrupoA);
};


cargarEquiposMundial();