import { places } from './apiConnection.js'

function printPlacesImages(placesData) {
  
  document.querySelector('#track').innerHTML = placesData.map((item) => {

    return `
      <div class="carrusel">
        <div>
          <a href="./place.html?id=${item.id}">
           <h4>${item.placeName}<strong>Travel</strong></h4>
            <picture><img src="${item.heroImage}" alt="${item.placeName}" /></picture>
          </a>
        </div>
      </div>
    `;

  }).join('')
}
printPlacesImages(places)
