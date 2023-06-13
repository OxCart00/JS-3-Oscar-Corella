import { fetchData } from "./fetch.js";
export async function carousel(API) {
  try {
    const data = await fetchData(API);
    // Filtrar los objetos con state igual a 0
    // Obtener referencias a los elementos del carrusel y los botones de navegación
    const carouselContainer = document.querySelector('.carousel-slide');
    const carouselProducts = document.querySelectorAll('.carousel-product');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');

    // Filtrar los productos con state = 0
    const filteredProducts = data.filter(product => product.state === "0");

    // Generar los elementos del carrusel
    filteredProducts.forEach(product => {
      // Crear el elemento del producto
      const productElement = document.createElement('div');
      productElement.classList.add('carousel-item');
      // Añadir el contenido del producto
      productElement.innerHTML = `
    <img src="${product.img}" alt="${product.title}">
    <h3>${product.title}</h3>
    <p>Color: ${product.color}</p>
    <p>Price: ${product.price}</p>
  `;
      // Añadir el producto al carrusel
      carouselContainer.appendChild(productElement);
    });

    // Tamaño de un solo elemento del carrusel (incluyendo margen)
    const itemWidth = carouselContainer.querySelector('.carousel-item').offsetWidth + 20;

    // Desplazarse hacia la izquierda
    prevButton.addEventListener('click', () => {
      carouselContainer.scrollLeft -= itemWidth;
    });

    // Desplazarse hacia la derecha
    nextButton.addEventListener('click', () => {
      carouselContainer.scrollLeft += itemWidth;
    });


  } catch (error) {
    console.log(error);
  }
}

export async function productDisplay(id, products_API) {
  if (!Array.isArray(products_API)) {
    var productsData = await fetchData(products_API);
    }else{
      var productsData =  products_API;
    }
  try {
    // Filtrar los objetos con state igual a 1
    const displayObject = productsData.filter(objeto => objeto.state === "1");


    // Referencias a los elementos del DOM
    const displayImg = document.getElementById("main--product");
    displayImg.style.backgroundImage = `url(${displayObject[0].img})`;
    displayImg.style.backgroundSize = "cover";

    const jokeDisplay = document.getElementById("display--joke");
    jokeDisplay.textContent = id;
    if (displayObject[0].color == 'black') {
      jokeDisplay.style.color = 'white';
      const radioButton = document.querySelector('#blackButton');
      radioButton.checked = true;
    } else {
      jokeDisplay.style.color = 'white';
      const radioButton = document.querySelector('#whiteButton');
      radioButton.checked = true;

    }

    const productTitle = document.getElementById("product--title");
    productTitle.textContent = displayObject[0].title;

    const productPrice = document.getElementById("product--price");
    productPrice.textContent = displayObject[0].price;

    const productJoke = document.getElementById("selected--joke");
    productJoke.innerHTML = `<span>Joke: </span>${id}`;

    // Crear elementos HTML para mostrar los productos


  } catch (error) {
    console.log(error);
  }
}
