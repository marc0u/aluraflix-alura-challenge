import axios from "axios";

const instance = axios.create({
  baseURL: "https://aluraflix-alura-challenge.vercel.app/api",
});

export default instance;
