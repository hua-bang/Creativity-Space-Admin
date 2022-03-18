import { Button, TableColumnProps, Tag } from '@arco-design/web-react';
import { ADMIN_STATUS_MAP_KEY, ADMIN_STATUS_MAP } from '@/const/admin';
import styles from './index.module.scss';
import { Admin } from '@/typings/admin';

export const columns: TableColumnProps<Admin>[] = [
  {
    title: 'id',
    dataIndex: 'id',
    align: 'center'
  },
  {
    title: '用户名',
    dataIndex: 'name',
    align: 'center'
  },
  {
    title: '账号',
    dataIndex: 'username',
  },
  {
    title: '状态',
    align: 'center',
    render: (_, item) => {
      const status = ADMIN_STATUS_MAP[item.status as ADMIN_STATUS_MAP_KEY];
      return (
        <Tag color={status.color}>{status.value}</Tag>
      );
    }
  },
  {
    title: '操作',
    align: 'center',
    width: 240,
    render: (col) => {
      return (
        <div className={styles['btn-area']}>
          <Button type='primary'>详情</Button>
          <Button type='primary' status='danger'>禁用</Button>
        </div>
      );
    }
  }
];