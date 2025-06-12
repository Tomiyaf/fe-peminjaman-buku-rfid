import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json"
  }
});

api.interceptors.response.use(r => {
  console.log(r.data);
  return r;
});

export default api;