import request from '@/request';

export const getUserList = () => {
  return request('/user/all');
}