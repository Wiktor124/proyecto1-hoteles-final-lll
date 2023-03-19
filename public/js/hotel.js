import { hotels } from './apiConnection.js';
import { createBanner } from './create-dom-elements.js';

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

    return `
      <li class="rooms__card">
        <img src="${item.roomImage}" alt="${item.roomName}" />
      
        <div class="rooms__text">
          <h3>${item.roomName}</h3>
          <div>
            <h3>Includes:</h3>
            <div>
              <span>${item.characteristics}</span>
            </div>
          </div>
      
          <div>
            <h3>Costs:</h3>
            <div>
              <span>CRC ${item.price}</span>
              <span>Original Price CRC ${(item.price + 100)} + CRC 56 of taxes and charges - ${item.discoutn}%</span>
            </div>
          </div>
        </div>
      </li>
    `;
    
  }).join('')
}
printRooms()