export enum UserStatus {
  FORBIDDEN = -1,
  NO_COMPLETE = 0,
  NORMAL = 1,
}

export interface User {
  id: string;
  username: string;
  job_title: string;
  name: string;
  company: string;
  status: UserStatus;
  avatar: string;
  description: string;
  is_booklet_author: number;
  home_page: string;
  get_like_count: number;
  get_view_count: number;
  follow_count: number;
  followed_count: number;
}

export interface QueryUserDto {
  id?: string;
  page: number;
  pageSize: number;
  status?: number;
  name?: string;
  username?: string;
  order?: string;
  order_by?: string;
}