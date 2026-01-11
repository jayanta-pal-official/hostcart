import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:3000/api",
  baseURL: "http://116.202.104.108:3000/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
api.defaults.withCredentials = true;

export default api;
