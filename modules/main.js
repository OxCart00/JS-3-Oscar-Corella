import { getJoke, searchJoke } from './moduleJoke.js';

// Evento de clic para el botón de chiste aleatorio
document.getElementById('jokeButton').addEventListener('click', getJoke);

// Evento de clic para el botón de búsqueda
document.getElementById('searchButton').addEventListener('click', searchJoke);

// Evento de teclado para el campo de búsqueda
document.getElementById('searchInput').addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    searchJoke();
  }
});