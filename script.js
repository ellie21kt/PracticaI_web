/**
 * Cambia el contenido de la tarjeta principal según la etapa seleccionada.
 */
function mostrarInfo(etapa) {
    const titulo = document.getElementById("titulo-etapa");
    const descripcion = document.getElementById("descripcion");

    // Diccionario de contenidos
    const datos = {
        'web1': {
            t: "Web 1.0",
            d: "La primera generación de la web. Era puramente informativa, estática y de 'solo lectura'. No existía interacción real con el usuario."
        },
        'web2': {
            t: "Web 2.0",
            d: "La web social e interactiva. Introdujo la colaboración, las redes sociales y el contenido generado por los propios usuarios."
        },
        'web3': {
            t: "Web 3.0",
            d: "La web inteligente y descentralizada. Utiliza IA, aprendizaje automático y tecnologías blockchain para una experiencia personalizada y segura."
        }
    };

    // Actualización de los elementos en el DOM
    titulo.textContent = datos[etapa].t;
    descripcion.textContent = datos[etapa].d;
}

/**
 * Abre la ventana emergente (Modal)
 */
function mostrarMensaje() {
    const modal = document.getElementById("miModal");
    modal.style.display = "flex"; // Usamos flex para mantener el centrado del CSS
}

/**
 * Cierra la ventana emergente
 */
function cerrarModal() {
    const modal = document.getElementById("miModal");
    modal.style.display = "none";
}

/**
 * Cierra el modal si el usuario hace clic fuera de la caja blanca
 */
window.onclick = function(event) {
    const modal = document.getElementById("miModal");
    if (event.target === modal) {
        cerrarModal();
    }
};