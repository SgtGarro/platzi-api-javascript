class CategoriesView {
  #sectionElement = document.querySelector(".categories-section");
  #categoriesGrid = document.querySelector(".categories-grid");
  #data;

  render(data) {
    this.#data = data;
    this.#categoriesGrid.innerHTML = "";

    const markup = this.#generateMarkup();
    this.#categoriesGrid.insertAdjacentHTML("beforeend", markup);
  }

  #generateMarkup() {
    return this.#data
      .map((categ) => `<div class="category-item">${categ.name}</div>`)
      .join("");
  }

  addHandlerRender(handler) {
    window.addEventListener("load", () => {
      handler();
    });
  }
}

export default new CategoriesView();
