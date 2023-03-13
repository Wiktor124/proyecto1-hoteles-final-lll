import { places, hotels } from './apiConnection.js'
import { CreateDomElements } from './create-dom-elements.js';

const idPlace = new URLSearchParams(window.location.search).get('id')

// print just one place
function printPlace(placesData) {
  CreateDomElements.getImageAndText(placesData.heroImage, placesData.placeName)
    
  document.getElementById('place').innerHTML = `

    <h3 class="carrousel__title">${placesData.placeName}</h3>
    <p>${placesData.description}</p>

  `;
}
printPlace(places[idPlace - 1])

// print hotels that match with place
function printHotels() {
  const getHotels = hotels.filter((item) => idPlace === item.idPlace)

  document.getElementById('track').innerHTML = getHotels.map((item) => {

    return `
      <div class="carrusel">
          <div>
            <a href="./hotel.html?id=${item.id}">
              <h4>${item.hotelName} <strong>TRAVEL</strong></h4>
              <picture><img src="${item.image}" alt="${item.hotelName}"></picture>
            </a>
          </div>
      </div>
    `;
    
  }).join('')
}
printHotels()