import { API_URL } from "./helpers.js";
import { API_KEY } from "./secrets.js";

export const getTrendingMovies = async function () {
  try {
    const res = await fetch(`${API_URL}/trending/movie/day?api_key=${API_KEY}`);
    const data = await res.json();

    const movies = data.results;
    return movies;
  } catch (err) {
    throw err;
  }
};

export const getMovie = async function (id) {
  try {
    const res = await fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}`);
    const data = await res.json();

    const movie = data;
    return movie;
  } catch (err) {
    throw err;
  }
};
