const API_KEY = "38240917-a3d7c9351f3e7e3fe8e3a9bdf"

export const fetchImages = async (inputSearch) => {
    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=${API_KEY}&q=${inputSearch}&image_type=photo&pretty=true`
      );

      if (!response.ok) {
        throw new Error('Network response is failed');
      }

      const data = await response.json();
      return data.hits;
    } catch (error) {
      console.log(error)
      return error
    }
  };