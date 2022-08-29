import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const KEY = 'a118176b8faae98781db8ebef5a2dfb9';
const TIME_WINDOW = 'week';

export async function fetchTrending() {
  return await axios.get(`trending/movie/${TIME_WINDOW}?api_key=${KEY}`);
}

export async function fetchMovie(movieId) {
  return await axios.get(`/movie/${movieId}?api_key=${KEY}`);
}
