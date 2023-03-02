import { hotels } from './apiConnection.js';

// print hotels
function printHotels(hotelsData) {
  document.getElementById('hotels').innerHTML  = hotelsData.map(item => {
   return `
    <li>
      <img src="${item.image}" alt="${item.hotelName}">
      <h2>${item.hotelName}</h2>
      <p>${item.descritption}</p>
    </li>
    `
  }).join('')
}
printHotels(hotels);
