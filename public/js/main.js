import {apiData} from './apiConnection.js'

class Places {
  constructor(places) {
    this.places = places;
  }

  printPlaces() {
    document.querySelector('.carrousel').innerHTML = this.places.map(item => {
      return `
        <li>
          <a href="#" class="carrousel__links"></a>  
          <img src="${item.heroImage}" alt="${item.placeName}">
          <h3 class="carrousel__title">${item.placeName} <strong>TRAVEL</strong></h3>
        </li>
      `
    }).join('');
  }

  printHotels() {
    document.querySelector('.carr').innerHTML = this.places.map(item => {
      return item
    }).join('');
  }

  printRooms() {

  }
}
export const print = new Places(apiData);
print.printPlaces()