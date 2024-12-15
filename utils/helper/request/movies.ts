import freeTestApiInstance from './instance/freeTestApiInstance';

import { FreeTestApiResponse } from '@/types/response';
import routes from '@/constants/routes';

export const sendMoviesRequest = async (
  limit: number,
): Promise<FreeTestApiResponse> =>
  freeTestApiInstance.get(routes.movies, {
    params: {
      limit,
    },
  });
