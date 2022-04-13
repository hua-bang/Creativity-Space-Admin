import request from '@/request';
import { QueryBookletArticleDto } from '@/typings/booklet-article';

export const getArticleByBookletId = (query: QueryBookletArticleDto) => {
  return request.post('/booklet-article/query', query);
}