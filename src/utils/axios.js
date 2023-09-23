import axios from "axios";

const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api"
    : "https://aluraflix-alura-challenge.vercel.app/api";

const instance = axios.create({
  baseURL: url,
});

export default instance;
