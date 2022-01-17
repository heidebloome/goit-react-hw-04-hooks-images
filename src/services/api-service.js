import axios from "axios";

const API_KEY = "24186443-1921da3d98fb9233d7b210f5d";

export default class API_SERVICE {
  constructor() {
    this.searchQuery = "";
  }

  #pageNumber = 1;
  #BASE_URL = "https://pixabay.com/api";

  async getImages() {
    try {
      const url = `${this.#BASE_URL}/?q=${
        this.searchQuery
      }&image_type=photo&page=${this.#pageNumber}&key=${API_KEY}&per_page=12`;
      const pictures = await axios
        .get(url)
        .then((response) => response.data.hits);
      this.incrementPage();
      return pictures;
    } catch (error) {
      console.log(
        "Error in api-service in function getImages(): ",
        error.message
      );
    }
  }

  incrementPage() {
    this.#pageNumber += 1;
  }

  resetPage() {
    this.#pageNumber = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(value) {
    this.searchQuery = value;
  }
}
