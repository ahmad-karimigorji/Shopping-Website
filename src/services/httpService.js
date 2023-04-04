import axios from "axios";
axios.defaults.baseURL = "https://backend-api-one-mu.vercel.app/api";

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default http;
