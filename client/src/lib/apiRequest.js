import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://supreme-space-spoon-5j6pjgjjjvx2v67p-8800.app.github.dev/api",
  withCredentials: true,
});

export default apiRequest;