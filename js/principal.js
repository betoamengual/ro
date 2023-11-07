document.addEventListener("DOMContentLoaded", function() {
    const imagen = document.getElementById("imagen");
    const anteriorBtn = document.getElementById("anterior");
    const siguienteBtn = document.getElementById("siguiente");
    const imagenes = ["img/2.png", "img/3.png"];
    let indiceActual = 0;

    function cambiarImagen(direccion) {
        if (direccion === "izquierda") {
            indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
        } else {
            indiceActual = (indiceActual + 1) % imagenes.length;
        }
        imagen.src = imagenes[indiceActual];
    }

    anteriorBtn.addEventListener("click", function() {
        cambiarImagen("izquierda");
    });

    siguienteBtn.addEventListener("click", function() {
        cambiarImagen("derecha");
    });
});