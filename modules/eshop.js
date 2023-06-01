import { carousel, productDisplay } from "./eshop--module.js";

//desglosar url
const getUrl = new URLSearchParams(window.location.search)
let savedJoke = getUrl.get('joke');

// Definiciones

const products_API = 'products.json';
const jokes_API = 'https://icanhazdadjoke.com/';

carousel(products_API);
productDisplay(savedJoke, jokes_API, products_API);

