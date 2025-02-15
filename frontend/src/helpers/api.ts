import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

// Base Axios instance
const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
