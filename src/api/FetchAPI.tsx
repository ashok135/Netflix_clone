import axios from "axios";
const token=import.meta.env.VITE_TMDB_AUTH_TOKEN
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
    
  },
});
 

export default api;
