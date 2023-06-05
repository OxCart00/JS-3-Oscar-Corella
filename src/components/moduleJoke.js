import { fetchData } from './fetch.js   ';

// Función para obtener un chiste aleatorio
export async function getJoke(API_URL) {
  try {
    const data = await fetchData(API_URL);
    console.log(data);

    // Actualiza el texto del chiste en el elemento <p>

    const jokeItem = document.getElementById('jokeText');
    jokeItem.textContent = data.joke;
    jokeItem.href = `productPage.html?joke=${data.joke}`

  } catch (error) {
    console.log(error);
  }
}

// Función para buscar chistes que coincidan con un término
export async function searchJoke() {
  const searchTerm = document.getElementById('searchInput').value;
  const search_URL = `https://icanhazdadjoke.com/search?term=${searchTerm}`;

  try {

    const data = await fetchData(search_URL);
    console.log(data);

    const jokeList = document.getElementById('jokeList');
    jokeList.innerHTML = '';

    if (data.results.length > 0 && searchTerm != 0) {
      const jokesFragment = document.createDocumentFragment(); // Crea un fragmento de documento para agregar los chistes
    
      for (const result of data.results) {
        const jokeItem = document.createElement('li'); // Crea un elemento de lista para cada chiste
        const jokeLink = document.createElement('a'); // Crea un enlace para cada chiste
        jokeLink.textContent = result.joke;
        jokeLink.href = `productPage.html?joke=${result.joke}`;
        jokeItem.appendChild(jokeLink); // Agrega el enlace al elemento de lista
        jokesFragment.appendChild(jokeItem); // Agrega el elemento de lista al fragmento de documento
      }
    
      // Agrega todos los chistes al DOM de una sola vez
      jokeList.appendChild(jokesFragment);
    
      jokeList.style.display = 'block';
    } else {
      const noResultsItem = document.createElement('li');
      noResultsItem.textContent = 'No se encontraron chistes con ese término de búsqueda.';
      jokeList.appendChild(noResultsItem);
      jokeList.style.display = 'block';
    }
  } catch (error) {
    console.log(error);
  }
}