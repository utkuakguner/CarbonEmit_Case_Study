import axios, { AxiosResponse } from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 10000,
});

axiosInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response.data;
    },
    () => {
        return {};
    }
);

export default axiosInstance;
