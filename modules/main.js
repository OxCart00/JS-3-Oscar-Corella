import { getJoke, searchJoke } from './moduleJoke.js';

// Evento de clic para el botón de chiste aleatorio
document.getElementById('jokeButton').addEventListener('click', getJoke);

// Evento de envío del formulario
document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir el envío del formulario predeterminado
  searchJoke();
});