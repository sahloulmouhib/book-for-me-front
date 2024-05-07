import axios from "axios";
import { BASE_URL, REQUEST_TIMEOUT } from "./api.constants";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: REQUEST_TIMEOUT,
});

export default axiosInstance;
