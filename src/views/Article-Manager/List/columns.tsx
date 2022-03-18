import { Article } from '@/typings/article';
import { Button, TableColumnProps, Tag } from '@arco-design/web-react';
import { ARTICLE_STATUS_MAP_KEY, ARTICLE_STATUS_MAP } from '@/const/article';
import styles from './index.module.scss';

export const columns: TableColumnProps<Article>[] = [
  {
    title: 'id',
    dataIndex: 'id',
    align: 'center'
  },
  {
    title: '标题',
    dataIndex: 'title',
    align: 'center'
  },
  {
    title: '状态',
    align: 'center',
    render: (_, item) => {
      const status = ARTICLE_STATUS_MAP[item.status as ARTICLE_STATUS_MAP_KEY];
      return (
        <Tag color={status.color}>{status.value}</Tag>
      );
    }
  },
  {
    title: '创建时间',
    dataIndex: 'create_time',
    align: 'center',
  }, 
  {
    title: '修改时间',
    dataIndex: 'update_time',
    align: 'center'
  }, 
  {
    title: '累计点赞数',
    dataIndex: 'like_count',
    align: 'center'
  },
  {
    title: '累计评论数',
    dataIndex: 'comment_count',
    align: 'center'
  },
  {
    title: '累计收藏数',
    align: 'center',
    dataIndex: 'collect_count'
  },
  {
    title: '操作',
    align: 'center',
    width: 240,
    render: (col) => {
      return (
        <div className={styles['btn-area']}>
          <Button type='primary'>详情</Button>
          <Button type='primary' status='danger'>审核不通过</Button>
        </div>
      );
    }
  }
];