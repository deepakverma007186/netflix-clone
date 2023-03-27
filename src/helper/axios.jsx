import axios from "axios";

// base for the every request url
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
