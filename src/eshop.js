import { carousel, productDisplay } from "./eshop--module.js";
import { Observable } from './publisher.js';
import { getJoke} from './moduleJoke.js';

// Observadores

// Observable para el cambio de producto
const productObservable = new Observable();

// Observable para el cambio de color
const colorObservable = new Observable();



//desglosar url
const getUrl = new URLSearchParams(window.location.search)
let savedJoke = getUrl.get('joke');

// Definiciones

const products_API = 'products.json';
const jokes_API = 'https://icanhazdadjoke.com/';

carousel(products_API);
productDisplay(savedJoke, jokes_API, products_API);

// Observers para los cambios de producto y color
const productObserver = (data) => {
  productImage.src = data.img;
  productImage.alt = data.title;
  productTitle.textContent = `${data.title} - ${data.color}`;
  productPrice.textContent = data.price;
};

const colorObserver = (data) => {
  productTitle.textContent = `${productTitle.textContent.split(' - ')[0]} - ${data}`;
};



// Suscribir los observers a los observables correspondientes
productObservable.subscribe(productObserver);
colorObservable.subscribe(colorObserver);

// Evento de clic para el botón de chiste aleatorio
document.getElementById('jokeButton').addEventListener('click', async () => {
  await getJoke(jokes_API);
});