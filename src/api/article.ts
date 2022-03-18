import request from '@/request';

export const getArticleList = () => {
  return request.post('/article/all'); 
}