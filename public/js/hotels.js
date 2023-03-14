import { hotels } from './apiConnection.js';
import { CreateDomElements } from './create-dom-elements.js'

// print hotels
function printHotels(hotelsData) {
  
  document.getElementById('gallery-container').innerHTML = hotelsData.map((item) => {
    return CreateDomElements.createGalleryCards(
      item.image,
      item.hotelName,
      './hotel.html?id=' + item.id,
    )
  }).join('')
}
printHotels(hotels);
