import axios from "axios";

export const clien = axios.create({
  baseURL: process.env.NUXT_PUBLIC_API_URL,
});
