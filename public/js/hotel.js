import { hotels } from './apiConnection.js';
import { heroImage } from './hero-image.js';

const idHotel = new URLSearchParams(window.location.search).get("id") - 1;

// print just one hotel
function printHotel(hotel) {
  heroImage(hotel.image, hotel.hotelName)
  
  document.getElementById('hotel').innerHTML = `
    <p>${hotel.descritption}</p>

  `
}
printHotel(hotels[idHotel])

// print rooms
function printRooms() {

  document.getElementById('track').innerHTML = hotels[idHotel].roomsList.map(item => {

    return `
      <div class="carrusel">
        <div>
          <a href="#">
            <h4>${item.hotelName} <strong>TRAVEL</strong></h4>
            <picture><img src="${item.image}" alt="${item.hotelName}"></picture>
          </a>
        </div>
      </div>
    `;
    
  }).join('')
}
printRooms()