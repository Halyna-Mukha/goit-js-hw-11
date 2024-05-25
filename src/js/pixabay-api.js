export function getImage(query) {
    const BASE_URL = 'https://pixabay.com/api/';
    const KEY = '44036260-cc4fe30d806c32d5981005e75';
    const params = new URLSearchParams({
      key: KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    });
    const url = `${BASE_URL}?${params}`;
    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }