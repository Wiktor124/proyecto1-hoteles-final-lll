import { hotels } from './apiConnection.js';
const idHotel = new URLSearchParams(window.location.search).get("id") - 1;

// print just one hotel
function printHotel(hotel) {
  
  document.getElementById('hotel').innerHTML = `

    <img src="${hotel.image}" alt="${hotel.hotelName}">
    <h2>${hotel.hotelName}</h2>
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