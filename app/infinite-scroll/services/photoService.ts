import type { Photo } from '@/model/photo';
import type { PaginatedResult, FetchPhotosParams } from '../model/photo';
import { httpService } from '@/utils/httpService';

export async function getPhotos({
  page = 1,
  limit = 20,
}: FetchPhotosParams = {}): Promise<PaginatedResult<Photo>> {
  const url = new URL('/api/photos', process.env.API_BASE_URL);
  
  return httpService.get<PaginatedResult<Photo>>(url, { page, limit });
}
