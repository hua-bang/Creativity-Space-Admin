// export const BookArticleStatusEnumMap = {
//   '0': '写作中',
//   '2': '已完成写作',
//   '-2': '写作中',
//   '-1': '写作中',
//   '1': '写作中',
// };

export const BookArticleStatusEnumMap = {
  '0': {
    value: '草稿',
    color: 'arcoblue'
  },
  '2': {
    value: '已发布',
    color: '#165dff'
  },
  '1': {
    value: '保存待审核',
    color: 'arcoblue'
  },
  '-2': {
    value: '已删除',
    color: 'red'
  },
  '-1' : {
    value: '审核不通过',
    color: 'orange'
  },
};

export type BOOK_ARTICLE_STATUS_MAP_KEY = keyof typeof BookArticleStatusEnumMap;