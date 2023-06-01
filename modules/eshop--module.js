import { fetchData } from './fetch.js';
// import { ObserverModule, Observer } from './publisher.js';

export async function carousel(API) {
  try {
    const data = await fetchData(API);
    // Filtrar los objetos con state igual a 0
    const carouselObjects = data.filter(objeto => objeto.state === "0");
    // Obtener referencias a los elementos del carrusel y los botones de navegación
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselSlide = document.querySelector('.carousel-slide');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');

    // Configuración del carrusel
    const slideWidth = 100 / 4; // Ancho de cada slide en porcentaje (para mostrar 3 productos en pantalla)
    let slidePosition = 0; // Posición actual del carrusel

    // Agregar estilos CSS al carrusel y los botones de navegación
    carouselContainer.style.overflow = 'hidden';
    carouselSlide.style.display = 'flex';
    carouselSlide.style.width = `${carouselObjects.length * slideWidth}%`;
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';

    prevButton.addEventListener('click', () => {
      // Mover el carrusel hacia la izquierda
      slidePosition += slideWidth;
      if (slidePosition > 0) {
        slidePosition = 0;
      }
      carouselSlide.style.transform = `translateX(${slidePosition}%)`;
    });

    nextButton.addEventListener('click', () => {
      // Mover el carrusel hacia la derecha
      slidePosition -= slideWidth;
      const maxPosition = -slideWidth * (carouselObjects.length - 3); // Máxima posición a la que se puede mover
      if (slidePosition < maxPosition) {
        slidePosition = maxPosition;
      }
      carouselSlide.style.transform = `translateX(${slidePosition}%)`;
    });

    // Crear elementos HTML para mostrar los productos
    carouselObjects.forEach(objeto => {
      const productElement = document.createElement('div');
      productElement.classList.add('carousel-product');
      // Agregar evento de clic al contenedor <div>
      productElement.addEventListener('click', () => {
        // Lógica del evento al hacer clic en el contenedor
        console.log('¡Haz hecho clic en el contenedor de imagen!');
      });
      productElement.innerHTML = `<img src="${objeto.img}" alt="${objeto.title}">`;
      carouselSlide.appendChild(productElement);
    });


  } catch (error) {
    console.log(error);
  }
}

export async function productDisplay(id, jokes_API, products_API) {
  try {
    const jokesData = await fetchData(jokes_API);
    const productsData = await fetchData(products_API);


    // Filtrar los objetos con state igual a 0
    const displayObject = productsData.filter(objeto => objeto.state === "1");


    // Referencias a los elementos del DOM
    const displayImg = document.getElementById("main--product");
    const jokeDisplay = document.getElementById("display--joke");
    jokeDisplay.textContent = id;
    const productTitle = document.getElementById("product--title");
    const productPrice = document.getElementById("product--price");
    const productJoke = document.getElementById("product--joke");

    // Crear elementos HTML para mostrar los productos


  } catch (error) {
    console.log(error);
  }
}
