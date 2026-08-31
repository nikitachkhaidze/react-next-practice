import type { Photo } from '@/model/photo';
import type { GetPhotosParams, PaginatedResult } from '../model/photo';
import { photos } from '../data/photos';

function simulateLatency<T>(value: T): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), 200));
}

export async function getPhotos({
  limit = 20,
  page = 1,
}: GetPhotosParams = {}): Promise<PaginatedResult<Photo>> {
  const start = (page - 1) * limit;
  const data = photos.slice(start, start + limit);

  return simulateLatency({ data, total: photos.length, page, limit });
}
