export interface ErrorResponse {
  errors: {
    title: string;
    errors?: string[] | string;
  };
}

export interface ApiResponse<T = any> {
  data: T;
}
