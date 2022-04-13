import request from '@/request';
import { QueryUserDto } from '@/typings/user';

export const getUserList = () => {
  return request('/user/all');
}

export const getUserCountInfo = () => {
  return request.get('/admin/user/countInfo');
}

export const queryUser = (queryUserDto: QueryUserDto) => {
  return request.post('/user/query', queryUserDto);
}