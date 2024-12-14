import axiosInstance from './instance';
import routes from '@/constants/routes';

interface Data {
    email: string;
    password: string;
}

export const sendLoginRequest = async (data: Data) => {
    const response = await axiosInstance.post(routes.login, data);

    return response;
};
