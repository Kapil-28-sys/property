import axios from "axios";

const api = axios.create({
  baseURL: "https://propertybackend.concentics.in/api/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;