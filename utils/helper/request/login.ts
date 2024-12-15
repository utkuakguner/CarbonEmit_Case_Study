import { BaseResponse } from '@/types/response';
import baseInstance from './instance/baseInstance';
import routes from '@/constants/routes';

interface Data {
    email: string;
    password: string;
}

export const sendLoginRequest = async (data: Data): Promise<BaseResponse> =>
    baseInstance.post(routes.login, data);
