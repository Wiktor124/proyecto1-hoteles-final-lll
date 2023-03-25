import { hotels } from './apiConnection.js';
import { createBanner } from './create-dom-elements.js';
console.log(hotels)

const idHotel = new URLSearchParams(window.location.search).get("id") - 1;

// print just one hotel
function printHotel(hotel) {
  createBanner(hotel.image[0], hotel.hotelName)

  document.getElementById('hotel').innerHTML = `
   
  <div class="discover">

      <div class="discover__textContainer">
        <h2 class="discover__title">${hotel.hotelName}</h2>

        <p class="discover__text">${hotel.descritption}</p>
      </div>

      <div class="discover__img">
        <img src="${hotel.image[1]}" alt="${hotel.hotelName}">
      </div>

    </div>

  `
}
printHotel(hotels[idHotel])

// print rooms
function printRooms() {

  document.querySelector('.rooms').innerHTML = hotels[idHotel].roomsList.map(item => {
    const total = Number(item.price) - Number(item.discount)

    return `
      <li class="rooms__card">
        <div class="rooms__text">
        <img src="${item.roomImage}" alt="${item.roomName}" />
          <div class="rooms--space">
            <h3>${item.roomName}</h3>
            <span>${item.characteristics}</span>
          </div>
        <div>
            <span class="price price-font">${item.price} $</span>
            <span class="total price-font">${total} $</span>
        </div>
      </li>
    `;
  }).join('')
}
printRooms()

/* form contact*/

document.getElementById('link').value = window.location.href;

