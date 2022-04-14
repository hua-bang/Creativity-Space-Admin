export const ADMIN_STATUS_MAP = {
  '-1' : {
    value: '禁用',
    color: 'red'
  },
  0: {
    value: '未审核',
    color: 'arcoblue'
  },
  1: {
    value: '启用',
    color: '#165dff'
  }
}

export const ADMIN_ROLE_MAP = {
  2: {
    value: '普通管理员',
    color: 'arcoblue'
  },
  3: {
    value: '超级管理员',
    color: '#165dff'
  }
}

export type ADMIN_STATUS_MAP_KEY = keyof typeof ADMIN_STATUS_MAP;
export type ADMIN_ROLE_MAP_KEY = keyof typeof ADMIN_ROLE_MAP;