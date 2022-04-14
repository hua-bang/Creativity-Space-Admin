import { QueryAdminDto, CreateAdminDto } from './../typings/admin';
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

export const queryAdminList = (queryAdminDto: QueryAdminDto) => {
  return request.post('/admin/query', queryAdminDto);
}

export const createAdmin = (admin: CreateAdminDto) => {
  return request.post('/admin/add', admin);
}