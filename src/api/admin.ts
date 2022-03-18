import request from '@/request';

export const login = (username: string, password: string) => {
  return request.post('/admin/signIn', {
    username,
    password
  });
}