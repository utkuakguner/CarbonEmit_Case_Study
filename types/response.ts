import { AnyMap } from "./common";

export interface BaseResponse {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any;
    message?: string;
}

export type FreeTestApiResponse = AnyMap[]