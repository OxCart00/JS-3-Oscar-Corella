import { getJoke } from '../src/components/jokes.js';

// Desglosar url
const getUrl = new URLSearchParams(window.location.search)
let savedJoke = getUrl.get('joke');

// Definiciones 
const jokes_API = 'https://icanhazdadjoke.com/';

// Evento de clic para el botón de chiste aleatorio
const jokeText = document.getElementById("jokeText");
document.getElementById('jokeButton').addEventListener('click', async () => {
  await getJoke(jokes_API, jokeText);
  jokeText.classList.add("joke--link")
});