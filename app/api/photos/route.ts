import { NextRequest, NextResponse } from 'next/server';
import { getPhotos } from './lib/services/photoService';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const limitParam = searchParams.get('limit');
  const pageParam = searchParams.get('page');

  const result = await getPhotos({
    limit: limitParam ? Number(limitParam) : undefined,
    page: pageParam ? Number(pageParam) : undefined,
  });

  return NextResponse.json(result);
}
