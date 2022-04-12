import { QueryArticleDto } from './../typings/article';
import request from '@/request';

export const getArticleList = () => {
  return request.post('/article/all'); 
}

export const getArticleCountInfo = () => {
  return request.get('/admin/article/countInfo');
}

export const getArticleDetailById = (id: string) => {
  return request.get(`/article/${id}`);
}

export const queryArticleList = (queryArticleDto: QueryArticleDto) => {
  return request.post('/article/query', queryArticleDto);
}