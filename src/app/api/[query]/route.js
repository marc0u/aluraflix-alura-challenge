import axios from "axios";
import requests from "@/utils/requests";

const axiosClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export async function GET(req, ctx) {
  const { query } = ctx.params;
  const data = await axiosClient.get(requests[query]).then((res) => res.data.results);
  return new Response(JSON.stringify(data));
}
