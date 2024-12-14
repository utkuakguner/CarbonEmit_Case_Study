import axios, { AxiosError, AxiosResponse } from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 10000,
});

axiosInstance.interceptors.request.use(
    (config) => {
        // const accessToken = document.cookie;

        // config.headers['Authorization'] = `Bearer: ${accessToken}`;

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error: AxiosError) => {
        const message = error.message || 'Something went wrong!';

        console.error('Error response:', message);

        return Promise.reject(new Error(message));
    }
);

export default axiosInstance;
