import axios, { AxiosError, AxiosResponse } from 'axios';

const baseInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 10000,
});

baseInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

baseInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response.data;
    },
    (error: AxiosError) => {
        const message =
            error?.response?.data || error.message || 'Something went wrong!';

        return { message };
    }
);

export default baseInstance;
