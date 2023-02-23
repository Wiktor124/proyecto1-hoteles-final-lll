
// Connect to Api
const fetchApiData = async () => {
  try {
    const data = await Promise.resolve(
      fetch(
        'https://63ed6ef13d9c852c3f5a8b83.mockapi.io/places',
      ).then((response) => response.json()),
    )

    return data;
  } catch (error) {
    throw new Error(error)
  }
}
const apiData = await fetchApiData()

export  {apiData};

