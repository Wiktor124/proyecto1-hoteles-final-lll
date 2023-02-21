const hotelsData = [];
// Work here!


// Connect to Api
const fetchApiData = async (endpoint) => {
  const api = 'https://63ed6ef13d9c852c3f5a8b83.mockapi.io/';
  
  try {
    const response = await fetch(`${api}${endpoint}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      const apiData = await response.json();
      hotelsData.push(apiData);
    }
  } catch (error) {
    throw new Error(error);
  }
};


// Here set endPoints
const setEndPoint = async () => {
  await fetchApiData('hotel');
  await fetchApiData('rooms');
};
window.onload = () => setEndPoint();