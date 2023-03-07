import { hotels } from './apiConnection.js';
import { placeOrHotel } from './events.js'
placeOrHotel.clickEvents()

const hotelPosition = localStorage.getItem('hotel');

// print just one hotel
function printHotel(hotel) {
  
  document.getElementById('hotel').innerHTML = `

    <img src="${hotel.image}" alt="${hotel.hotelName}">
    <h2>${hotel.hotelName}</h2>
    <p>${hotel.descritption}</p>

  `
}
printHotel(hotels[hotelPosition])

// print rooms
function printRooms() {

  document.getElementById('track').innerHTML = hotels[hotelPosition].roomsList.map(item => {

    return `
     <div>
      <img src="${item.roomImage}" alt="Room of ${hotels[hotelPosition].hotelName}">
      <h2 class="carrousel__title">${item.roomName}</h2>
      <p>${item.characteristics}</p>
      <p>${item.discoutn}</p>
    </div>
    `

  }).join('')
}
printRooms()