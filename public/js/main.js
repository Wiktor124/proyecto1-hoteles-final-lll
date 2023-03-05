import {places} from './apiConnection.js';

// class Places {
//   constructor(places, hotels, rooms) {
//     this.places = places;
//     this.hotels = hotels;
//   }

//   // printPlacesImages() {
//   //   document.querySelector('.carrousel').innerHTML = this.places.map(item => {
//   //     return `
//   //       <li>
//   //         <a href="places.html" class="carrousel__links" data-id="${item.id}"></a>  
//   //         <img src="${item.heroImage}" alt="${item.placeName}">
//   //         <h3 class="carrousel__title">${item.placeName} <strong>TRAVEL</strong></h3>
//   //       </li>
//   //     `
//   //   }).join('');
//   // }

//   printPlaces() {
//     document.querySelector('.carrousel').innerHTML = this.places.map(item => {
//       return `
//         <li>
//           <h3 class="carrousel__title">${item.placeName} <strong>TRAVEL</strong></h3>
//           <img src="${item.heroImage}" alt="${item.placeName}">
//           <p>${item.description}</p>
//         </li>
//       `
//     }).join('');
//   }

//   printHotels() {
//     document.querySelector('.hotel__list').innerHTML = this.hotels.map(item => {
//       return `
//       <li>
//         <h2>${item.hotelName}</h2>
//         <p>${item.characteristics}</p>
//         <p>${item.description}</p>
//         <img src="${item.image}" alt="${item.hotelName}">
//         <span>${item.price}</span>
//       </li>
//       `
//     }).join('');
//   }

//   printRooms() {

//   }
// }

// export const print = new Places(places, hotels);
// print.printPlacesImages();

// print.printPlaces()


// 

console.log(places);
function printPlacesImages(placesData) {
  document.getElementById('place-gallery').innerHTML = placesData.map(item => {
    return `
      <li>
        <a href="./place.html" id="gallery-links" class="gallery__links" data-id="${item.id}"></a>
        <img src="${item.heroImage}" alt="${item.placeName}" />
        <h4>${item.placeName}<strong>Travel</strong></h4>
      </li>
    `
  }).join('');

}
printPlacesImages(places)
 

function onePlace(target) {
  localStorage.setItem('place', places.findIndex(item => item.id === target));
}

document.querySelector('.gallery').addEventListener('click', (e) => {

  if(e.target.matches('a')) {
    onePlace(e.target.dataset.id);
    console.log(e.target);
  }
})
