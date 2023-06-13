import { carousel, productDisplay } from "../src/components/eshop--module.js";
import { Observable } from '../src/publisher.js';
import { getJoke } from '../src/components/moduleJoke.js';
import { fetchData } from '../src/components/fetch.js';

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
productDisplay(savedJoke, products_API);

// Suscribir los observers a los observables correspondientes
colorObservable.setSubscriber(productDisplay);

// Evento de clic para el botón de chiste aleatorio
const jokeText = document.getElementById("jokeText");
document.getElementById('jokeButton').addEventListener('click', async () => {
  await getJoke(jokes_API, jokeText);
  jokeText.classList.add("joke--link")
});

// Eventos cambio de color
const whiteButton = document.getElementById('whiteButton');
whiteButton.addEventListener('click', async () => {
  if (whiteButton.checked == true) {
    const state = "state"
    const productsData = await fetchData(products_API);
    const position = productsData.findIndex(producto => producto[state] === "1");
    productsData[position].state = "0";
    productsData[position+1].state = "1";
    colorObservable.twoVariableNotify(savedJoke, productsData);
  }
});
const blackButton = document.getElementById('blackButton');
blackButton.addEventListener('click', async () => {
  if (blackButton.checked == true) {
    const state = "state"
    const productsData = await fetchData(products_API);
    const position = productsData.findIndex(producto => producto[state] === "1");
    productsData[position].state = "0";
    productsData[position-1].state = "1";
    colorObservable.twoVariableNotify(savedJoke, productsData);
    console.log(productsData);
  }
});