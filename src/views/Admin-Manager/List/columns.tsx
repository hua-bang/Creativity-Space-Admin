import { Button, Image, TableColumnProps, Tag } from '@arco-design/web-react';
import { ADMIN_STATUS_MAP_KEY, ADMIN_STATUS_MAP, ADMIN_ROLE_MAP, ADMIN_ROLE_MAP_KEY } from '@/const/admin';
import styles from './index.module.scss';
import { Admin, AdminRoleEnum } from '@/typings/admin';

export const columns: TableColumnProps<Admin>[] = [
  {
    title: 'id',
    dataIndex: 'id',
    align: 'center'
  },
  {
    title: '姓名',
    dataIndex: 'name',
    align: 'center'
  },
  {
    title: '用户头像',
    render(_: unknown, record) {
      return (
        <Image src={record.avatar} width="80" />
      );
    }
  },
  {
    title: '用户名',
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
    title: '角色',
    align: 'center',
    render: (_, item) => {
      const status = ADMIN_ROLE_MAP[item.role as ADMIN_ROLE_MAP_KEY];
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