import { Tag as TagProps, TagStatusEnum } from '@/typings/tag';
import { Button, TableColumnProps, Tag } from '@arco-design/web-react';
import { ARTICLE_STATUS_MAP_KEY, ARTICLE_STATUS_MAP } from '@/const/article';
import styles from './index.module.scss';
import { ColumnProps } from '@arco-design/web-react/es/Table';
import { TAG_STATUS_MAP } from '@/const/tag';

export const columns: ColumnProps<TagProps>[] = [
  {
    title: 'id',
    dataIndex: 'id',
    align: 'center'
  },
  {
    title: '标签名',
    dataIndex: 'name',
    align: 'center'
  },
  {
    title: '状态',
    align: 'center',
    render: (_, item) => {
      const status = TAG_STATUS_MAP[item.status as TagStatusEnum];
      return (
        <Tag color={status.color}>{status.value}</Tag>
      );
    }
  }
];