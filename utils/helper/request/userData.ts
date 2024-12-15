import baseInstance from './instance/baseInstance';

import { BaseResponse } from '@/types/response';
import routes from '@/constants/routes';

export const sendUserDataRequest = async (
  accessToken: string,
): Promise<BaseResponse> =>
  baseInstance.get(routes.userData, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
