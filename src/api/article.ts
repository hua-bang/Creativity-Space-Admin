import request from '@/request';

export const getArticleList = () => {
  return request.post('/article/all'); 
}

export const getArticleCountInfo = () => {
  return request.get('/admin/article/countInfo');
}