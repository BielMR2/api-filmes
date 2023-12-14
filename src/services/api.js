import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocket-filmes.onrender.com"
})