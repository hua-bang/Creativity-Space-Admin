import { Button, Image, TableColumnProps, Tag } from '@arco-design/web-react';
import { ADMIN_STATUS_MAP_KEY, ADMIN_STATUS_MAP, ADMIN_ROLE_MAP, ADMIN_ROLE_MAP_KEY } from '@/const/admin';
import styles from './index.module.scss';
import { Admin, AdminRoleEnum } from '@/typings/admin';
import Avatar from '@arco-design/web-react/es/Avatar/avatar';
import { IconUser } from '@arco-design/web-react/icon';

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
        <Avatar>
          {
            record.avatar ? (
              <img src={record.avatar} />
            ) : (
              <IconUser />
            )
          }  
        </Avatar>
        
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
  }
];