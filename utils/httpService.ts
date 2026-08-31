import { HttpError } from './HttpError';

async function request<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, init);

  if (!response.ok) {
    throw new HttpError(response.status, `Request to ${url} failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export const httpService = {
  get<T>(url: string, params?: Record<string, string | number>): Promise<T> {
    const query = params ? `?${new URLSearchParams(params as Record<string, string>)}` : '';
    return request<T>(`${url}${query}`);
  },

  post<T>(url: string, body?: unknown): Promise<T> {
    return request<T>(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
  },

  put<T>(url: string, body?: unknown): Promise<T> {
    return request<T>(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
  },

  delete<T>(url: string): Promise<T> {
    return request<T>(url, { method: 'DELETE' });
  },
};
