export enum AuditTypeEnum {
  ARTICLE = 1,
  POINT = 2,
  BOOKLET = 3,
  USER = 4,
}


export interface UpdateAuditStatusDto {
  else_id: string;

  type: AuditTypeEnum;

  status: number;

  content: string;
}
