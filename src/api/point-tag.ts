import { QueryTagDto } from './../typings/tag';
import request from '@/request';
import { QueryPointDto } from '@/typings/point';

export const queryPointTag = (queryTagDto: QueryTagDto) => {
  return request.post('/point-tag/query', queryTagDto);
}

export const createPointTag = (name: string) => {
  return request.post('/point-tag/add', {
    name
  });
}