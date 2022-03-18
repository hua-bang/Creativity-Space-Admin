export enum AdminStatusEnum {
  FORBIDDEN = -1,
  NORMAL = 1,
}

export enum AdminRoleEnum {
  OPERATOR = 1,
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
