import { places, hotels } from './apiConnection.js'

export class placeOrHotel {

  static savePlacePosition (place) {

    localStorage.setItem(
      'place',
      places.findIndex((item) => item.id === place)
    )

  }

  static saveHotelPosition (hotel) {

    localStorage.setItem(
      'hotel',
      hotels.findIndex((item) => item.id === hotel)
    )

  }

  static clickEvents() {

    document.querySelector('body').addEventListener('click', (e) => {

      if (e.target.matches('.place__link')) {
        placeOrHotel.savePlacePosition(e.target.dataset.id) // data-id of target
      }
  
      if (e.target.matches('.hotel__link')) {
        placeOrHotel.saveHotelPosition(e.target.dataset.id) // data-id of target
      }

    })
    
  }
}
placeOrHotel.clickEvents()