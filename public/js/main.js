import { places } from './apiConnection.js'
import { placeOrHotel } from './events.js'
placeOrHotel.clickEvents()

function printPlacesImages(placesData) {
  
  document.querySelector('.gallery').innerHTML = placesData.map((item) => {

    return `
    <li>
      <a href="./place.html" class="gallery__link place__link" data-id="${item.id}"></a>
      <img src="${item.heroImage}" alt="${item.placeName}" />
      <h4>${item.placeName}<strong>Travel</strong></h4>
    </li>
    `

  }).join('')
}
printPlacesImages(places)
