import { Tag as TagProps, TagStatusEnum } from '@/typings/tag';
import { Button, TableColumnProps, Tag } from '@arco-design/web-react';
import { ARTICLE_STATUS_MAP_KEY, ARTICLE_STATUS_MAP } from '@/const/article';
import styles from './index.module.scss';
import { ColumnProps } from '@arco-design/web-react/es/Table';
import { TAG_STATUS_MAP } from '@/const/tag';
import { BookletArticle } from '@/typings/booklet-article';
import { BookArticleStatusEnumMap, BOOK_ARTICLE_STATUS_MAP_KEY } from '@/const/booklet-article';

export const columns: ColumnProps<BookletArticle>[] = [
  {
    title: 'id',
    dataIndex: 'id',
    align: 'center'
  },
  {
    title: '文章标题',
    dataIndex: 'title',
    align: 'center'
  },
  {
    title: '文章介绍',
    dataIndex: 'description',
    align: 'center'
  },
  {
    title: '顺序',
    dataIndex: 'order',
    align: 'center'
  },
  {
    title: '状态',
    align: 'center',
    render: (_, item) => {
      const status = BookArticleStatusEnumMap[item.status as unknown as BOOK_ARTICLE_STATUS_MAP_KEY];
      return (
        <Tag color={status.color}>{status.value}</Tag>
      );
    }
  }
];