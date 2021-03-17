import axios from "axios";

import {
  ACCEPT,
  CONTENT_TYPE,
  AUTHORIZATION,
  API_SERVER_URL
} from "./config";

const getAxiosInstance = () => {
  // config later
  const headers = {
    'Accept': ACCEPT,
    'Content-Type': CONTENT_TYPE,
    'Authorization': AUTHORIZATION,
  };
  const apiServerUrl = API_SERVER_URL;
  const axiosInstance = axios.create({
    baseURL: apiServerUrl,

  });

  axiosInstance.interceptors.response.use(
    (response) => {
      if ([200, 201].includes(response.status)) {
        const result = response.data;
        return result;
      }
      return Promise.reject(response);
    },
    (error) => {
      const {
        code
      } = error.response.data;

      if (code) {
        // write later
        return Promise.reject(error.response.data);
      }
      return Promise.reject(error.response.statusText);
    }
  );

  return axiosInstance;
};

const request = (url, data = {}) => {
  try {
    const API = getAxiosInstance();
    return API.post(url, data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export default request;
