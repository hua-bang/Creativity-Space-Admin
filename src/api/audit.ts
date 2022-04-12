import { UpdateAuditStatusDto } from './../typings/audit';
import request from '@/request';

export const auditArticle = (updateAuditStatusDto: UpdateAuditStatusDto) => {
  return request.post('/admin/article/audit', updateAuditStatusDto);
};

export const auditUser = (updateAuditStatusDto: UpdateAuditStatusDto) => {
  return request.post('/admin/user/audit', updateAuditStatusDto);
};