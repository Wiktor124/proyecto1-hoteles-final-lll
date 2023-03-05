import { places, hotels } from './apiConnection.js'

export class placeOrHotel {

  static getPlace (place) {

    localStorage.setItem(
      'place',
      places.findIndex((item) => item.id === place)
    )

  }

  static getHotel (hotel) {

    localStorage.setItem(
      'hotel',
      hotels.findIndex((item) => item.id === hotel)
    )

  }

  static clickEvents() {

    document.querySelector('body').addEventListener('click', (e) => {

      if (e.target.matches('.place__link')) {

        placeOrHotel.getPlace(e.target.dataset.id)
      }
  
      if (e.target.matches('.hotel__link')) {
        placeOrHotel.getHotel(e.target.dataset.id)
      }

    })
    
  }
}
placeOrHotel.clickEvents()