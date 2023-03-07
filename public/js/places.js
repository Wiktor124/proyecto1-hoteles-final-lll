import { places } from './apiConnection.js';
import { placeOrHotel } from './events.js'
placeOrHotel.clickEvents()

// print places
function printPlaces(placesData) {

  document.getElementById('places').innerHTML  = placesData.map(item => {
    
   return `
    <li>
      <a href="./place.html" class="gallery__link place__link" data-id="${item.id}"></a>
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