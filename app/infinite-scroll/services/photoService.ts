import type { Photo } from '@/model/photo';
import type { PaginatedResult, FetchPhotosParams } from '../model/photo';
import { httpService } from '@/utils/httpService';

export async function getPhotos({
  page = 1,
  limit = 20,
}: FetchPhotosParams = {}): Promise<PaginatedResult<Photo>> {
  return httpService.get<PaginatedResult<Photo>>('/api/photos', { page, limit });
}
