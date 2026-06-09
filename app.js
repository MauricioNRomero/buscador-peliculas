const API_KEY = 'afdef103c467a3ce50b24acd82e9226b';
const input = document.querySelector('#input-busqueda');
const boton = document.querySelector('#btn-buscar');
const resultados = document.querySelector('#resultados');

const buscarPelicula = async () => {
    try {
        const respuesta = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${input.value}&language=es-ES`,
        );
        const peli = await respuesta.json();
        resultados.innerHTML = '';
        peli.results.forEach((pelicula) => {
            if (!pelicula.poster_path) return;
            const div = document.createElement('div');
            div.className = 'tarjeta';
            div.innerHTML = `
        <img class="tarjeta__poster" src="https://image.tmdb.org/t/p/w200${pelicula.poster_path}" />
        <p class="tarjeta__titulo">${pelicula.title}</p>
        `;
            resultados.appendChild(div);
        });
        input.value = '';
    } catch (error) {
        console.log(error.message);
        resultados.textContent = 'Ha ocurrido un error';
    }
};
input.addEventListener('keydown', (evento) => {
    if (evento.key === 'Enter') {
        buscarPelicula();
    }
});

boton.addEventListener('click', buscarPelicula);
