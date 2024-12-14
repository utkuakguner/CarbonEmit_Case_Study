import { Response } from '@/types/response';
import axiosInstance from './instance';
import routes from '@/constants/routes';

export const sendUserDataRequest = async (
    accessToken: string
): Promise<Response> =>
    axiosInstance.get(routes.userData, {
        headers: { Authorization: `Bearer ${accessToken}` },
    });
