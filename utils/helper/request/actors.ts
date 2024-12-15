import { FreeTestApiResponse } from '@/types/response';
import freeTestApiInstance from './instance/freeTestApiInstance';
import routes from '@/constants/routes';

export const sendActorsRequest = async (
    limit: number
): Promise<FreeTestApiResponse> =>
    freeTestApiInstance.get(routes.actors, { params: { limit } });
