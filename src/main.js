import { getJoke, searchJoke } from '../src/components/moduleJoke.js';

const API_URL = 'https://icanhazdadjoke.com/'

// Evento de clic para el botón de chiste aleatorio
const randomJoke = document.getElementById("jokeText");
document.getElementById('jokeButton').addEventListener('click', async () => {
  await getJoke(API_URL,randomJoke);
  randomJoke.href = `productPage.html?joke=${randomJoke.textContent}`;
  randomJoke.classList.add("joke--link");
});

// Evento de envío del formulario
document.getElementById('searchForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevenir el envío del formulario predeterminado
  searchJoke();
});