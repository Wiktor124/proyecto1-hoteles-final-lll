import { places } from './apiConnection.js'
import { CreateDomElements } from './create-dom-elements.js'

// print places
function printPlaces(placesData) {

  document.getElementById('gallery-container').innerHTML = placesData.map((item) => {
    return CreateDomElements.createGalleryCards(
      item.heroImage,
      item.placeName,
      './place.html?id=' + item.id,
    )
  }).join('')

}
printPlaces(places)
