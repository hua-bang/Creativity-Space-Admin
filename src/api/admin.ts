import request from '@/request';

export const login = (username: string, password: string) => {
  return request.post('/admin/signIn', {
    username,
    password
  });
}

export const getAdminList = () => {
  return request('/admin/all');
}

export const getUserInfo = () => {
  return request('/admin/info');
}