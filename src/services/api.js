import axios from "axios";

const api = axios.create({
  baseURL: "https://api-ptk.herokuapp.com",
});

export default api;
