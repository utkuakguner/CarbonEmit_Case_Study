import baseInstance from './instance/baseInstance';

import { BaseResponse } from '@/types/response';
import routes from '@/constants/routes';

interface Data {
  name: string;
  email: string;
  password: string;
}

export const sendSignUpRequest = async (data: Data): Promise<BaseResponse> =>
  baseInstance.post(routes.signUp, data);
