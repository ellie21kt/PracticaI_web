// Función para cambiar la información en la tarjeta principal
function mostrarInfo(etapa) {
    const titulo = document.getElementById("titulo-etapa");
    const descripcion = document.getElementById("descripcion");

    const contenido = {
        'web1': {
            t: "Web 1.0: Estática",
            d: "La era del hipervínculo. Contenido creado por expertos, donde el usuario final solo podía leer y navegar sin participar."
        },
        'web2': {
            t: "Web 2.0: Dinámica",
            d: "La web social y colaborativa. El auge de las bases de datos, redes sociales y plataformas donde cualquiera crea contenido."
        },
        'web3': {
            t: "Web 3.0: Descentralizada",
            d: "La web semántica impulsada por IA y Blockchain. Se enfoca en la privacidad, la propiedad de los datos y la interconectividad inteligente."
        }
    };

    // Actualizamos con el contenido correspondiente
    titulo.textContent = contenido[etapa].t;
    descripcion.textContent = contenido[etapa].d;
}

// Control del Modal
function mostrarMensaje() {
    document.getElementById("miModal").style.display = "block";
}

function cerrarModal() {
    document.getElementById("miModal").style.display = "none";
}

// Cerrar si hacen clic fuera del modal
window.onclick = function(event) {
    let modal = document.getElementById("miModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}