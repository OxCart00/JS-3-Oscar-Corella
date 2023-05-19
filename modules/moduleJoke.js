let API_URL = 'https://icanhazdadjoke.com/';

// Función para obtener un chiste aleatorio
export async function getJoke() {
  try {
    const response = await fetch(API_URL, {
      headers: {
        Accept: 'application/json'
      }
    });

    const data = await response.json();

    // Actualiza el texto del chiste en el elemento <p>
    document.getElementById('jokeList').innerHTML = '';
    document.getElementById('jokeList').style.display = 'none';

    const jokeItem = document.createElement('li');
    jokeItem.textContent = data.joke;

    document.getElementById('jokeList').appendChild(jokeItem);
    document.getElementById('jokeList').style.display = 'block';
  } catch (error) {
    console.log(error);
  }
}

// Función para buscar chistes que coincidan con un término
export async function searchJoke() {
  const searchTerm = document.getElementById('searchInput').value;

  try {
    const response = await fetch(`https://icanhazdadjoke.com/search?term=${searchTerm}`, {
      headers: {
        Accept: 'application/json'
      }
    });

    const data = await response.json();

    const jokeList = document.getElementById('jokeList');
    jokeList.innerHTML = '';

    if (data.results.length > 0) {
      for (const result of data.results) {
        const jokeItem = document.createElement('li');
        jokeItem.textContent = result.joke;
        jokeList.appendChild(jokeItem);
      }
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