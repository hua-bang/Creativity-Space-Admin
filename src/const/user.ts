export const USER_STATUS_MAP = {
  '-1': {
    value: '禁用',
    color: 'red'
  },
  0: {
    value: '未完善信息',
    color: 'arcoblue'
  },
  1: {
    value: '正常',
    color: '#165dff'
  }
}

export const USER_BOOKLET_MAP = {
  '-1': {
    value: '禁用',
    color: 'red'
  },
  0: {
    value: '未申请',
    color: 'arcoblue'
  },
  1: {
    value: '正常',
    color: '#165dff'
  },
  2: {
    value: '申请未审核',
    color: 'arcoblue'
  },
}

export type USER_BOOKLET_MAP_KEY = keyof typeof USER_BOOKLET_MAP;