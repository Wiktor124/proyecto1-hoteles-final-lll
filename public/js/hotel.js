import {
  hotels
} from './apiConnection.js';
const hotelPosition = localStorage.getItem('hotel');

// print just one hotel
function printHotel(hotel) {
  document.getElementById('hotel').innerHTML = `
    <img src="${hotel.image}" alt="${hotel.hotelName}">
    <h2>${hotel.hotelName}</h2>
    <p>${hotel.descritption}</p>
  `
}
printHotel(hotels[hotelPosition])

// print rooms
function printRooms() {
  console.log(hotels[hotelPosition].roomsList);
  document.getElementById('rooms').innerHTML = hotels[hotelPosition].roomsList.map(item => {
    return `
     <li>
      <img src="${item.roomImage}" alt="${hotels[hotelPosition].hotelName}">
      <h2 class="carrousel__title">${item.roomName}</h2>
      <p>${item.characteristics}</p>
      <p>${item.discoutn}</p>
    </li>`
  }).join('')
}
printRooms()


function tab() {
  const tab = document.querySelectorAll(".tab");
  const content = document.querySelectorAll(".cont");

  tab.forEach((i, z) => {
    tab[z].addEventListener("click", () => {
      tab.forEach((i, z) => {
        tab[z].classList.remove("active")
        content[z].classList.remove("active")
      });
      tab[z].classList.add('active')
      content[z].classList.add('active')
    })
  });

};
tab()