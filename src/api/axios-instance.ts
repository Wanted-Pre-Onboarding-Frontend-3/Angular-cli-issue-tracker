import axios from 'axios';

const DEFAULT_AXIOS_TIMEOUT_MILLISECONDS = 1000;

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,

  paramsSerializer: (params) => {
    return new URLSearchParams(params).toString();
  },

  timeout: DEFAULT_AXIOS_TIMEOUT_MILLISECONDS,
});
