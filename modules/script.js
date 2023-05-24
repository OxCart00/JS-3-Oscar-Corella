// Manejo de eventos y lógica en JavaScript
import { getJoke} from './moduleJoke.js';

// Evento de clic para el botón de chiste aleatorio
document.getElementById('jokeButton').addEventListener('click', getJoke);

// Obtener elementos del DOM
const productImage = document.getElementById('productImage');
const whiteButton = document.getElementById('whiteButton');
const blackButton = document.getElementById('blackButton');
const productTitle = document.getElementById('productTitle');
const productPrice = document.getElementById('productPrice');
const selectedJoke = document.getElementById('selectedJoke');
const randomJokeButton = document.getElementById('randomJokeButton');
const otherProducts = document.getElementById('otherProducts');

// Evento de clic para el botón "Blanco"
whiteButton.addEventListener('click', function() {
  productImage.src = 'ruta_imagen_producto_blanco.png'; // Reemplaza 'ruta_imagen_producto_blanco.png' con la ruta real de la imagen en blanco
});

// Evento de clic para el botón "Negro"
blackButton.addEventListener('click', function() {
  productImage.src = 'ruta_imagen_producto_negro.png'; // Reemplaza 'ruta_imagen_producto_negro.png' con la ruta real de la imagen en negro
});

// Función para generar un chiste aleatorio
function generateRandomJoke() {
  // Lógica para generar un chiste aleatorio
  const randomJoke = 'Chiste aleatorio';

  selectedJoke.textContent = randomJoke;
}

// Evento de clic para el botón "Generar chiste aleatorio"
randomJokeButton.addEventListener('click', generateRandomJoke);

// Evento de clic para las imágenes de otros productos
otherProducts.addEventListener('click', function(event) {
  if (event.target.tagName === 'IMG') {
    const selectedProduct = event.target.alt;
    // Lógica para mostrar el producto seleccionado
    console.log(selectedProduct);
  }
});