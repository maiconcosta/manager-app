import axios from "axios";

const api = axios.create({
  baseURL: process.env.VUE_APP_RANDOM_USER_URL,
});

export default api;
