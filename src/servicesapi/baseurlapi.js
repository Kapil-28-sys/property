import axios from "axios";

const api = axios.create({
  baseURL: "/proxy",  // ✅ /api nahi, /proxy use karo
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;