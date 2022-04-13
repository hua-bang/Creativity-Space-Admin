import { QueryTagDto } from './../typings/tag';
import request from '@/request';
import { QueryPointDto } from '@/typings/point';

export const queryTag = (queryTagDto: QueryTagDto) => {
  return request.post('/tag/query', queryTagDto);
}

export const createTag = (name: string) => {
  return request.post('/tag/add', {
    name
  });
}