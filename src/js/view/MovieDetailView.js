class MovieDetailView {
  #sectionElement = document.querySelector(".movie-detail-section");
  #data;
  constructor() {
    // Add event close
    this.#sectionElement.addEventListener("click", (e) => {
      const btn = e.target.closest(".movie-detail-close");
      console.log(btn);

      if (!btn) return;

      this.#data = null;
      this.#sectionElement.style.transform = "translateY(100%)";
    });
  }

  renderMovie(data) {
    this.#data = data;
    console.log(data);
    this.#sectionElement.innerHTML = "";

    const markup = this.#generateMarkup();
    this.#sectionElement.insertAdjacentHTML("beforeend", markup);
    this.#sectionElement.style.transform = "translateY(0)";
  }

  #generateMarkup() {
    return `
      <button class="movie-detail-close" type="submit">
        <div class="icon icon--arrow-left icon--white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
      </button>
      <div class="movie-detail-poster">
        <img
          src="https://image.tmdb.org/t/p/w500${this.#data.poster_path}"
          alt=""
        />
      </div>
      <div class="movie-detail-container">
        <h3 class="movie-detail-title">${this.#data.title}</h3>
        <div class="movie-detail-rating">
          ${`
              <div class="icon icon--star">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>`.repeat(Math.floor(this.#data.vote_average))}
          <span class="movie-detail-rate">(${this.#data.vote_average.toFixed(
            1
          )})</span>
        </div>
        <p class="movie-detail-text">
          ${this.#data.overview}
        </p>
      </div>`;
  }
}

export default new MovieDetailView();
