import request from '@/request';
import { QueryBookletDto } from '@/typings/booklet';

export const getBookletList = (params: QueryBookletDto) => {
  return request.post('/booklet/all', params);
}