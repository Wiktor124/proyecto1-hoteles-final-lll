import { fetchPlaces, fetchHotels } from './apiConnection.js'

// validate if the query param of the URL has an id
const validateUrlQueryId = async (id, typeData) => {

  if(id < 0) throw new Error("There's not id!");

  const apiData = {
    places: await fetchPlaces(),
    hotels: await fetchHotels(),
    both: await Promise.all([fetchPlaces(), fetchHotels()])
  }

  return apiData[typeData]
}

export default validateUrlQueryId;
