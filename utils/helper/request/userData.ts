import axiosInstance from './instance';
import routes from '@/constants/routes';

export const sendUserDataRequest = async (accessToken: string) => {
    const response = await axiosInstance.get(routes.userData, {
        headers: { Authorization: `Bearer ${accessToken}` },
    });

    return response.data;
};
