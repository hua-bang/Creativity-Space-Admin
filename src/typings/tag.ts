export interface Tag {
  id: string;
  name: string;
  status: number;
}

export interface QueryTagDto {
  id: string;
  page: number;
  pageSize: number;
  status: number;
  name: string;
  order: string;
  order_by: string;
}


export enum TagStatusEnum {
  FORBIDDEN = -1,
  UN_AUDIT = 0,
  NORMAL = 1
}
