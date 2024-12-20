import { cookies } from 'next/headers';

import { sendUserDataRequest } from './request/userData';

import cookieNames from '@/constants/cookieNames';

export const getServerSession = async () => {
  const cookieStore = await cookies();

  const accessTokenCookie = cookieStore.get(cookieNames.accessToken);

  const accessToken = String(accessTokenCookie?.value);

  if (!accessToken) return null;

  const { data } = await sendUserDataRequest(accessToken);

  return data || null;
};
