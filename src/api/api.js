import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api", // Adjust the base URL to your backend
  withCredentials: true,               // Include cookies with requests
});

export default api;
