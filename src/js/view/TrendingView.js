class TrendingView {
  #sectionElement = document.querySelector(".trending-section");
  #trendingMovies = document.querySelector(".trending-movies-container");
  #data;

  renderTrendingMovies(data) {
    this.#data = data;
    this.#trendingMovies.innerHTML = "";

    const markup = this.#generateMarkup();
    this.#trendingMovies.insertAdjacentHTML("beforeend", markup);
  }

  #generateMarkup() {
    return this.#data.map(this.#generateMarkupItem).join("");
  }
  #generateMarkupItem(movie) {
    return `
      <div class="trending-movie">
        <img
          class="trending-movie-img" data-id="${movie.id}"
          src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
        />
      </div>`;
  }

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  addHandlerClickMovie(handler) {
    this.#trendingMovies.addEventListener("click", function (e) {
      const element = e.target;

      if (!element.closest(".trending-movie-img")) return;

      const { id } = element.dataset;

      handler(id);
    });
  }
}

export default new TrendingView();
