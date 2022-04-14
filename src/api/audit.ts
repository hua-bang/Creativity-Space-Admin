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

export const auditTag = (updateAuditStatusDto: UpdateAuditStatusDto) => {
  return request.post('/admin/tag/audit', updateAuditStatusDto);
};

export const auditPointTag = (updateAuditStatusDto: UpdateAuditStatusDto) => {
  return request.post('/admin/point-tag/audit', updateAuditStatusDto);
};

export const auditBookletArticle = (updateAuditStatusDto: UpdateAuditStatusDto) => {
  return request.post('/admin/booklet-article/audit', updateAuditStatusDto);
};

export const auditAdmin = (updateAuditStatusDto: UpdateAuditStatusDto) => {
  return request.post('/admin/admin/audit', updateAuditStatusDto);
};