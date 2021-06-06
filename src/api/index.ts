import axios from "axios";

export const Api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: "https://frosty-wood-6558.getsandbox.com/dishes",
  timeout: 2000,
});
