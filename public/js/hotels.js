import { hotels } from './apiConnection.js';
import { placeOrHotel } from './events.js'
placeOrHotel.clickEvents()

// print hotels
function printHotels(hotelsData) {
  
  document.getElementById('hotels').innerHTML  = hotelsData.map(item => {
    
   return `
    <li>
      <a href="./hotel.html"class="gallery__link hotel__link" data-id="${item.id}"></a>
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
