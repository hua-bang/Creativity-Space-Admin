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

export type ADMIN_STATUS_MAP_KEY = keyof typeof ADMIN_STATUS_MAP;