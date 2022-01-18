import axios from "axios";

const API_KEY = "24186443-1921da3d98fb9233d7b210f5d";

export default class API_SERVICE {
  constructor() {
    this.BASE_URL = "https://pixabay.com/api";

    this.searchQuery = "";
    this.pageNumber = 1;
  }

  async getImages() {
    const url = `${this.BASE_URL}/?q=${this.searchQuery}&page=${this.pageNumber}&key=${API_KEY}&per_page=12`;
    const response = await axios
      .get(url)
      .then((response) => response.data.hits)
      .catch((error) => error.message);
    this.incrementPage();
    return response;
  }

  incrementPage() {
    this.pageNumber += 1;
  }

  resetPage() {
    this.pageNumber = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(value) {
    this.searchQuery = value;
  }
}
