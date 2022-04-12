import request from '@/request/index';

export const getStaticInfo = () => {
  return request('/admin/static/info');
}