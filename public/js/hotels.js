import { hotels } from './apiConnection.js';

// print hotels
function printHotels(hotelsData) {
  
  document.getElementById('hotels').innerHTML  = hotelsData.map(item => {
    
   return `
    <li>
      <a href="./hotel.html?id=${item.id}"class="gallery__link hotel__link"></a>
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
