import axios, { AxiosResponse } from 'axios';

const freeTestApiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_FREE_TEST_API_URL,
  timeout: 10000,
});

freeTestApiInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

freeTestApiInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  () => {
    return [];
  },
);

export default freeTestApiInstance;
