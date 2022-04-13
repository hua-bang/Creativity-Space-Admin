import { User } from './user';

export enum PointStatusEnum {
  DELETED = -2,
  FORBIDDEN = -1,
  UNAUDITED = 0,
  AUDITED = 1,
}

export interface Point {
  id: string;
  create_time: number;
  comment_count: number;
  content: string;
  like_count: number;
  user: User;
  tags_id?: string;
  status: PointStatusEnum;
}


export interface QueryPointDto {
  page: number;
  pageSize: number;
  status?: PointStatusEnum;
  content?: string;
  order?: string;
  order_by?: string;
}
