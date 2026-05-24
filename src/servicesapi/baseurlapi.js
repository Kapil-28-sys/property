import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://property.concentics.com/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;