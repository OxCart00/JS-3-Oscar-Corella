import { getJoke, searchJoke } from './modules/moduleJoke.js';

const API_URL = 'https://icanhazdadjoke.com/'

// Evento de clic para el botón de chiste aleatorio
  document.getElementById('jokeButton').addEventListener('click', async () => {
    await getJoke(API_URL);
});

// Evento de envío del formulario
document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir el envío del formulario predeterminado
  searchJoke();
});