import { places, hotels } from './apiConnection.js';
const placePosition = localStorage.getItem('place');

// print just one place
function printPlace(placesData) {
  document.getElementById('place').innerHTML  = `
    <h3 class="carrousel__title">${placesData.placeName}</h3>
    <img src="${placesData.heroImage}" alt="${placesData.placeName}">
    <p>${placesData.description}</p>
  `;
}
printPlace(places[placePosition])

// print hotels that match with place
function printHotels() {
  const getHotels = hotels.filter(item => places[placePosition].id === item.idPlace)
  console.log(getHotels);

  document.querySelector('.carrousel').innerHTML = getHotels.map(item => {
    return `
     <li>
      <a href="./hotel.html" class="carrousel__links" data-id="${item.id}"></a>
      <h2 class="carrousel__title">${item.hotelName}</h2>
      <p>${item.descritption}</p>
      <img src="${item.image}" alt="${item.hotelName}">
    </li>`
  }).join('')
}
printHotels()


// find index hotels
function oneHotel(target) {
  console.log(target);
  localStorage.setItem('hotel', hotels.findIndex(item => item.id === target));
}

document.getElementById('carrousel').addEventListener('click', (e) => {
  if(e.target.matches('a')) {
    oneHotel(e.target.dataset.id);
    console.log(e.target);
  }
})



