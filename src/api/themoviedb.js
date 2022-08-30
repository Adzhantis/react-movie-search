import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const KEY = 'a118176b8faae98781db8ebef5a2dfb9';
const TIME_WINDOW = 'week';
export const IMG_PREFIX = 'https://image.tmdb.org/t/p/w200'


export async function fetchTrending() {
  return await axios.get(`trending/movie/${TIME_WINDOW}?api_key=${KEY}`);
}

export async function fetchMovie(movieId) {
  return await axios.get(`/movie/${movieId}?api_key=${KEY}`);
}

export async function fetchMovieCast(movieId) {
  return await axios.get(`/movie/${movieId}/credits?api_key=${KEY}`);
}

export async function fetchMovieReviews(movieId) {
  return await axios.get(`/movie/${movieId}/reviews?api_key=${KEY}`);
}

export async function fetchMoviesBySearch(query) {
  return await axios.get(`/search/movie?api_key=${KEY}&query=${query}`);
}
