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
    document.getElementById('jokeText').textContent = data.joke;
  } catch (error) {
    console.log(error);
  }
}