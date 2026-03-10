function mostrarInfo(etapa) {
    const titulo = document.getElementById("titulo-etapa");
    const descripcion = document.getElementById("descripcion");

    const contenido = {
        'web1': {
            t: "Web 1.0",
            d: "La web estática. Contenido de solo lectura donde el usuario era un espectador pasivo."
        },
        'web2': {
            t: "Web 2.0",
            d: "La web social e interactiva. El auge de las redes sociales y la creación de contenido."
        },
        'web3': {
            t: "Web 3.0",
            d: "La web inteligente y descentralizada. Control total de datos y uso de IA avanzada."
        }
    };

    titulo.textContent = contenido[etapa].t;
    descripcion.textContent = contenido[etapa].d;
}

function mostrarMensaje() {
    document.getElementById("miModal").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("miModal").style.display = "none";
}

// Cerrar modal al hacer clic fuera de la caja
window.onclick = function(event) {
    let modal = document.getElementById("miModal");
    if (event.target == modal) {
        cerrarModal();
    }
}