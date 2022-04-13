export enum AuditTypeEnum {
  ARTICLE = 1,
  POINT = 2,
  BOOKLET = 3,
  USER = 4,
  TAG = 5,
  POINT_TAG = 6,
  ADMIN = 7,
}


export interface UpdateAuditStatusDto {
  else_id: string;

  type: AuditTypeEnum;

  status: number;

  content: string;
}
