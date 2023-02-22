// Work here!


// Connect to Api
const fetchApiData = async () => {

  try {
    const data = await Promise.resolve(
      fetch('https://63ed6ef13d9c852c3f5a8b83.mockapi.io/places').then(response => response.json())
    )
    printPlaces(data);

  } catch (error) {
    throw new Error(error);
  }
};
window.onload = () => fetchApiData();