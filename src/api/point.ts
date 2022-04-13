import request from '@/request';
import { QueryPointDto } from '@/typings/point';

export const getPointList = () => {
  return request('/point/all');
}

export const queryPoint = (queryPointDto: QueryPointDto) => {
  return request.post('/point/query', queryPointDto);
}