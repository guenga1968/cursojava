const urlParams = new URLSearchParams(window.location.search);
const path = urlParams.get('path');
const titulo = urlParams.get('titulo');
const description = urlParams.get("description");
const detalle = document.getElementById("detalle")

function mostrarPelicula(){
    
    detallePelicula = 
    `<div class="w-75 h-50">
    <h1 class="mb-3 ">${titulo}</h1>
    <img class="img-fluid" src="https://image.tmdb.org/t/p/w500/${path}" alt=${titulo}>
</div>
<p class="m-5 p-5">${description}</p>`;

detalle.innerHTML = detallePelicula

}

mostrarPelicula();