import cookieNames from '@/constants/cookieNames';
import { cookies } from 'next/headers';
import { sendUserDataRequest } from './request/userData';

export const getServerSession = async () => {
    const cookieStore = await cookies();

    const accessTokenCookie = cookieStore.get(cookieNames.accessToken);

    const accessToken = String(accessTokenCookie?.value);

    const { data: userData } = await sendUserDataRequest(accessToken);

    return userData;
};
