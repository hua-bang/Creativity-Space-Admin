import { UpdateAuditStatusDto } from './../typings/audit';
import request from '@/request';

export const auditArticle = (updateAuditStatusDto: UpdateAuditStatusDto) => {
  return request.post('/admin/article/audit', updateAuditStatusDto);
};

export const auditUser = (updateAuditStatusDto: UpdateAuditStatusDto) => {
  return request.post('/admin/user/audit', updateAuditStatusDto);
};

export const auditPoint = (updateAuditStatusDto: UpdateAuditStatusDto) => {
  return request.post('/admin/point/audit', updateAuditStatusDto);
};

export const auditBooklet = (updateAuditStatusDto: UpdateAuditStatusDto) => {
  return request.post('/admin/booklet/audit', updateAuditStatusDto);
};