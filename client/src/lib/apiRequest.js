import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://easyrent-api.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;