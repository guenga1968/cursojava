const tendenciasContainer = document.getElementById("tendenciasContainer");
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

let pagina = 1

function siguiente(){
    pagina += 1;
    cargarPeliculas();
}

function anterior(){
    if(pagina > 1){
        pagina -= 1;
        cargarPeliculas();
    }
}



const cargarPeliculas = async ()=>{
    try{
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=${pagina}`);
        if(respuesta.status === 200){

            const datos = await respuesta.json();
            let peliculas = []
            datos.results.forEach(pelicula =>{
                peliculas +=`
                <div class="peliculas"><a href="./paginas/detalle.html?path=${pelicula.poster_path}&titulo=${pelicula.title}&description=${pelicula.overview}">
                        <div class="pelicula"><img class="imgTendencia"
                                src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"
                                alt="${pelicula.title}" >
                            <div class="tituloPelicula">
                                <h4>${pelicula.title}</h4>
                            </div>
                        </div>
                    </a></div>
                `
            });
            tendenciasContainer.innerHTML = peliculas;
        }

    } catch(error){
        console.log(error);
    }
}
cargarPeliculas();

btnAnterior.addEventListener('click', anterior);
btnSiguiente.addEventListener('click', siguiente)