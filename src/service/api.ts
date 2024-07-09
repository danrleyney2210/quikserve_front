import axios from "axios";

export const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  // headers: {
  //   "Content-type": "application/json; charset=UTF-8",
  // },
});