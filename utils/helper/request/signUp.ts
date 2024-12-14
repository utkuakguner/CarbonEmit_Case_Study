import axiosInstance from './instance';
import routes from '@/constants/routes';

interface Data {
    name: string;
    email: string;
    password: string;
}

export const sendSignUpRequest = async (data: Data) => {
    const response = await axiosInstance.post(routes.signUp, data);

    return response.data
};
