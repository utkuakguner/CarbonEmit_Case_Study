import { Response } from '@/types/response';
import axiosInstance from './instance';
import routes from '@/constants/routes';

interface Data {
    name: string;
    email: string;
    password: string;
}

export const sendSignUpRequest = async (data: Data): Promise<Response> =>
    axiosInstance.post(routes.signUp, data);
