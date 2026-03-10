function mostrarInfo(etapa) {
    const titulo = document.getElementById("titulo-etapa");
    const descripcion = document.getElementById("descripcion");

    const contenido = {
        'web1': { t: "Web 1.0", d: "La web de solo lectura y estática." },
        'web2': { t: "Web 2.0", d: "La web social e interactiva." },
        'web3': { t: "Web 3.0", d: "La web descentralizada e inteligente." }
    };

    titulo.textContent = contenido[etapa].t;
    descripcion.textContent = contenido[etapa].d;
}

function mostrarMensaje() {
    // Usamos flex para que el centrado del CSS se aplique
    document.getElementById("miModal").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("miModal").style.display = "none";
}

// Cerrar si el usuario toca fuera del recuadro
window.onclick = function(event) {
    let modal = document.getElementById("miModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}