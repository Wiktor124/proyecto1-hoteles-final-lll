import { places } from './apiConnection.js';

// print places
function printPlaces(placesData) {

  document.getElementById('places').innerHTML  = placesData.map(item => {
    
   return `
    <li>
      <a href="./place.html?id=${item.id}" class="gallery__link place__link"></a>
      <div>
        <h3 class="carrousel__title">${item.placeName}</h3>
        <img src="${item.heroImage}" alt="${item.placeName}">
        <p>${item.description}</p>
      </div>
    </li>
    `
    
  }).join('')

}
printPlaces(places);