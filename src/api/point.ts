import request from '@/request';

export const getPointList = () => {
  return request('/point/all');
}