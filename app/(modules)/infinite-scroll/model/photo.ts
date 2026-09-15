export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

export interface FetchPhotosParams {
  page?: number;
  limit?: number;
}
