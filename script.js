function mostrarInfo(etapa) {
    const titulo = document.getElementById("titulo-etapa");
    const descripcion = document.getElementById("descripcion");

    const contenido = {
        'web1': {
            t: "Web 1.0",
            d: "La web estática de los 90. Páginas de solo lectura conectadas por hipervínculos simples sin interacción."
        },
        'web2': {
            t: "Web 2.0",
            d: "La web social e interactiva. El auge de las redes sociales, los wikis y la creación de contenido por el usuario."
        },
        'web3': {
            t: "Web 3.0",
            d: "La web inteligente y descentralizada. Uso de IA, Blockchain y control total de los datos por el usuario."
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

window.onclick = function(event) {
    let modal = document.getElementById("miModal");
    if (event.target == modal) { cerrarModal(); }
}