const API_KEY = 'afdef103c467a3ce50b24acd82e9226b';

const input = document.querySelector('#input-busqueda');
const boton = document.querySelector('#btn-buscar');
const resultados = document.querySelector('#resultados');

const buscarPelicula = async () => {
    const respuesta = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${input.value}&language=es-ES`,
    );
    const peli = await respuesta.json();
    resultados.innerHTML = '';
    peli.results.forEach((pelicula) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w200${pelicula.poster_path}" />
        <p>${pelicula.title}</p>
        `;
        resultados.appendChild(div);
        input.value = '';
    });
};

boton.addEventListener('click', buscarPelicula);
