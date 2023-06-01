import { fetchData } from './fetch.js';


// Definición del módulo Observer
const ObserverModule = (function () {
  // Lista de observadores
  const observers = [];

  // Función para agregar observadores
  function addObserver(observer) {
    observers.push(observer);
  }

  // Función para eliminar observadores
  function removeObserver(observer) {
    const index = observers.indexOf(observer);
    if (index !== -1) {
      observers.splice(index, 1);
    }
  }

  // Función para notificar a todos los observadores
  function notifyObservers(data) {
    observers.forEach((observer) => observer.update(data));
  }

  return {
    addObserver,
    removeObserver,
    notifyObservers,
  };
})();

// Definición del observador
const Observer = {
  // Función para actualizar el observador
  update(data) {
    console.log('Se ha actualizado el observador con los datos:', data);
  }
};

// Exportar el módulo
export {ObserverModule, Observer};