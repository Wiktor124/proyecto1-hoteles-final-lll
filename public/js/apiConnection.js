
// Connect to Api
const fetchApiData = async () => {

  //const api = 'https://63ed6ef13d9c852c3f5a8b83.mockapi.io/';
  const api = 'https://641ce24db556e431a877f2a0.mockapi.io/';

  try {

    const [places, hotels] = await Promise.all([
      fetch(`${api}places`).then((response) => response.json()),
      fetch(`${api}hotels`).then((response) => response.json())
    ]);
    localStorage.setItem('apiData', JSON.stringify({places, hotels}))
    
    return { places, hotels };
  } catch (err) {
    console.error(err);
    
    return JSON.parse(localStorage.getItem('apiData'))
  }
};
export const { places, hotels } = await fetchApiData();