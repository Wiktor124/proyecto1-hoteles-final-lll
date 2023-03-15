import { hotels } from './apiConnection.js';
import { CreateDomElements } from './create-dom-elements.js';

CreateDomElements.getImageAndText('public/assets/img/banner-hotels.jpeg', 'Hotels')

// print hotels
function printHotels(hotelsData) {
  
  document.getElementById('hotels').innerHTML  = hotelsData.map(item => {

    const galleryLi = document.createElement('li')
    galleryLi.style.background = `url(${item.image})`

    const divCard = document.createElement('div')

    const spanText = document.createElement('span')
    spanText.textContent = 'Costa Rica';
    spanText.classList.add('gallery__country');

    const title = document.createElement('h4');
    title.classList.add('gallery__titleCard')
    title.textContent = item.hotelName

    divCard.append(spanText, title);

    const arrow = document.createElement('img')
    arrow.classList.add('gallery__arrow')
    arrow.src = './public/assets/icons/arrow-card.png' // ruta icono
    arrow.classList.add()
    
    const link = document.createElement('a')
    link.href = './hotel.html?id=${item.id}';
    link.classList.add('gallery__link');
    link.append(divCard, arrow)
    
    galleryLi.appendChild(link);

    return galleryLi.outerHTML
    
  }).join('')
}
printHotels(hotels);
