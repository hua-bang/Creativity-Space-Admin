import request from '@/request';

export function getAll() {
  return request.get(`/analysis/all`);
}

export function getByType(type: string) {
  return request.get(`/analysis/${type}`);
}