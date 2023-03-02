import {places} from './apiConnection.js';
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
