export interface GetPhotosParams {
  limit?: number;
  page?: number;
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}
