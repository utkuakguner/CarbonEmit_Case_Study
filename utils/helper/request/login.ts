import { Response } from '@/types/response';
import axiosInstance from './instance';
import routes from '@/constants/routes';

interface Data {
    email: string;
    password: string;
}

export const sendLoginRequest = async (data: Data): Promise<Response> =>
    axiosInstance.post(routes.login, data);
