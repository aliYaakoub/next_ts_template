import { RootState } from './RootState';

export type { RootState };

export interface ErrorResponse {
  errors: {
    title: string;
    errors?: string[] | string;
  };
}

export interface ApiResponse<T = any> {
  data: T;
}
