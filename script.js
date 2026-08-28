// Buscar canciones
const buscador = document.querySelector(".buscador input");

buscador.addEventListener("input", function () {
    const texto = buscador.value.toLowerCase();
    const canciones = document.querySelectorAll(".cancion");

    canciones.forEach(function (cancion) {
        const nombre = cancion.querySelector("h3").textContent.toLowerCase();

        if (nombre.includes(texto)) {
            cancion.style.display = "flex";
        } else {
            cancion.style.display = "none";
        }
    });
});


// Agregar canciones
const botonAgregar = document.querySelector(".titulo-seccion button");
const listaCanciones = document.querySelector(".lista-canciones");

botonAgregar.addEventListener("click", function () {

    const nombre = prompt("Escribe el nombre de la canción:");
    const artista = prompt("Escribe el nombre del artista:");

    if (nombre && artista) {

        const nuevaCancion = document.createElement("div");

        nuevaCancion.classList.add("cancion");

        nuevaCancion.innerHTML = `
            <div class="icono-musica">🎵</div>

            <div>
                <h3>${nombre}</h3>
                <p>${artista}</p>
            </div>

            <button class="eliminar">🗑️</button>
        `;

        listaCanciones.appendChild(nuevaCancion);
    }
});


// Eliminar canciones
document.addEventListener("click", function (evento) {

    if (evento.target.classList.contains("eliminar")) {
        evento.target.parentElement.remove();
    }

});
