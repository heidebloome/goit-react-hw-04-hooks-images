import axios from "axios";

const KEY = "24186443-1921da3d98fb9233d7b210f5d";
const BASE_URL = "https://pixabay.com/api";
// const url = `https://pixabay.com/api/?q=${searchQuery}&page=${perPage}&key=${KEY}&per_page=12`;

async function getPictures(searchQuery, page) {
  try {
    const response = await axios.get(
      `${BASE_URL}/?q=${searchQuery}&page=${page}&key=${KEY}&per_page=12`
    );
    const pictures = await response.data.hits;
    console.log("1:", pictures);
    return pictures;
  } catch (error) {
    console.log(error);
  }
}

export default getPictures;

// export default class ApiService {
//     #base_url = 'https://pixabay.com/api';
//     #page = 1;

//     constructor() {
//         this.searchQuery = '';
//     }

//     async getPictures(searchQuery, page) {
//     try {
//         const response = await axios.get(`${this.#base_url}/?q=${searchQuery}&page=${page}&key=${KEY}&per_page=12`);
//         const pictures = await response.data.hits;
//         console.log(pictures);
//         return pictures;
//     } catch (error) {
//         console.log(error)
//     }
// }
// }
