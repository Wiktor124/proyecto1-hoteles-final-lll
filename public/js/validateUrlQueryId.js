import { fetchPlaces, fetchHotels } from './apiConnection.js'

// validate if the query param of the URL has an id
export const validateUrlQueryId = async (id, typeData) => {

  if (id >= 0) {

    switch (typeData) {
      case 'places':
        return await fetchPlaces();
      case 'hotels':
        return await fetchHotels();
      case 'both':
        return [await fetchPlaces(), await fetchHotels()];
    }
  } else {
    throw Error("There's not id")
  }
}
