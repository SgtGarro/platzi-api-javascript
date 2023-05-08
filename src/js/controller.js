import * as model from "./model.js";
import CategoriesView from "./view/CategoriesView.js";
import MovieDetailView from "./view/MovieDetailView.js";
import TrendingView from "./view/TrendingView.js";
const controlTrendingMovies = async function () {
  try {
    // 1) Get the data
    const movies = await model.getTrendingMovies();
    // 2) Render movies
    TrendingView.renderTrendingMovies(movies);
  } catch (err) {
    console.error(err);
  }
};
const controlDetailMovie = async function (id) {
  try {
    // 1) Get the data
    const movie = await model.getMovie(id);
    // 2) Show movie
    MovieDetailView.renderMovie(movie);
  } catch (err) {
    console.error(err);
  }
};
const controlCategoriesList = async function () {
  try {
    // 1) Get the data
    const data = await model.getCategories();

    // 2) Render categories
    CategoriesView.render(data);

    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

const init = function () {
  TrendingView.addHandlerRender(controlTrendingMovies);
  TrendingView.addHandlerClickMovie(controlDetailMovie);
  CategoriesView.addHandlerRender(controlCategoriesList);
};

init();
