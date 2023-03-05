import { places, hotels } from './apiConnection.js';
import { placeOrHotel } from './events.js'
placeOrHotel.clickEvents()

const placePosition = localStorage.getItem('place');

// print just one place
function printPlace(placesData) {
  document.getElementById('place').innerHTML  = `
    <img src="${placesData.heroImage}" alt="${placesData.placeName}" class="heroImage" />
    <h3 class="carrousel__title">${placesData.placeName}</h3>
    <p>${placesData.description}</p>
  `;
}
printPlace(places[placePosition])

// print hotels that match with place
function printHotels() {
  const getHotels = hotels.filter(item => places[placePosition].id === item.idPlace)
  console.log(getHotels);

  document.getElementById('track').innerHTML = getHotels.map(item => {
    return `
     <div class="carrusel">
      <a href="./hotel.html" class="carrousel__link hotel__link" data-id="${item.id}"></a>
      <div>
        <img src="${item.image}" alt="${item.hotelName}">
        <h2 class="carrousel__title">${item.hotelName}</h2>
        <p>${item.descritption}</p>
      </div>
    </div>`
  }).join('')
}
printHotels()



