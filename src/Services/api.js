import axios from "axios";

export const Api = axios.create({
  baseURL: "https://kenzieshop.herokuapp.com/sessions",
});
