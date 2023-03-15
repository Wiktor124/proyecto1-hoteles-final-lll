import { hotels } from './apiConnection.js';
import { createGalleryCards } from './create-dom-elements.js'

// print hotels
function printHotels(hotelsData) {
  
  document.getElementById('gallery-container').innerHTML = hotelsData.map((item) => {
    return createGalleryCards(
      item.image,
      item.hotelName,
      './hotel.html?id=' + item.id,
    )
  }).join('')
}
printHotels(hotels);
