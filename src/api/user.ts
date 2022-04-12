import request from '@/request';

export const getUserList = () => {
  return request('/user/all');
}

export const getUserCountInfo = () => {
  return request.get('/admin/user/countInfo');
}

