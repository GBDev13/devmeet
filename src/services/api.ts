import axios from "axios";

export const api = axios.create({
  baseURL: "https://dev-meet-api.herokuapp.com/",
});
