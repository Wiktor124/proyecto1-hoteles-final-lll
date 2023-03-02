import { places } from './apiConnection.js';

// print places
function printPlaces(placesData) {
  document.getElementById('places').innerHTML  = placesData.map(item => {
   return `
    <li>
      <h3 class="carrousel__title">${item.placeName}</h3>
      <img src="${item.heroImage}" alt="${item.placeName}">
      <p>${item.description}</p>
    </li>
    `
  }).join('')
}
printPlaces(places);