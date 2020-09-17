import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const api = axios.create({
  baseURL: "localhost:3000/api/v1",
});

api.interceptors.response.use(
  (res) => res,
  function (error: AxiosError) {
    console.error(error.response);
    return Promise.reject(error);
  }
);

export default api;
