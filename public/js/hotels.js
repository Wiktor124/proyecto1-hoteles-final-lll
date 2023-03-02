import { hotels } from './apiConnection.js';

// print hotels
function printHotels(hotelsData) {
  document.getElementById('hotels').innerHTML  = hotelsData.map(item => {
   return `
    <li>
      <a href="./hotel.html" id="carrousel-links" class="gallery__links" data-id="${item.id}"></a>
      <div>
        <img src="${item.image}" alt="${item.hotelName}">
        <h2>${item.hotelName}</h2>
        <p>${item.descritption}</p>
      </div>
    </li>
    `
  }).join('')
}
printHotels(hotels);
