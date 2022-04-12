export enum BookletStatusEnum {
  FORBIDDEN = -1,
  REJECTED = -2,
  NO_AUDIT = 0,
  NORMAL = 1,
}

export interface Booklet {
  id: string;

  name: string;

  create_time: string;

  update_time: string;

  description: string;

  introduce: string;

  status: BookletStatusEnum;

  cover_url: string;
}

export interface QueryBookletDto {
  page: number;
  pageSize: number;
  status?: BookletStatusEnum;
  name?: string;
  description?: string;
  order?: string;
  order_by?: string;
}
