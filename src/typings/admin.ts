export enum AdminStatusEnum {
  FORBIDDEN = -1,
  NORMAL = 1,
}

export enum AdminRoleEnum {
  NORMAL = 2,
  SUPER = 3,
}

export interface Admin {
  id: string;

  username: string;

  password: string;

  name: string;

  avatar: string;

  status: AdminStatusEnum;

  role: AdminRoleEnum;
}

export interface QueryAdminDto {
  id?: string;
  page: number;
  pageSize: number;
  status?: AdminStatusEnum;
  name?: string;
  role?: AdminRoleEnum;
  username?: string;
  order?: string;
  order_by?: string;
}
