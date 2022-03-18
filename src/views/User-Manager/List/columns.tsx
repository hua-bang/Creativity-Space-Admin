import { User } from '@/typings/user';
import { Button, TableColumnProps, Tag } from '@arco-design/web-react';
import Avatar from '@arco-design/web-react/es/Avatar/avatar';
import { IconUser } from '@arco-design/web-react/icon';
import styles from './index.module.scss';

export const columns: TableColumnProps<User>[] = [
  {
    title: '用户名',
    dataIndex: 'name',
    align: 'center'
  }, 
  {
    title: '头像',
    render: (_, item) => {
      return (
        <Avatar shape='circle' size={50}>
          {
            item.avatar
              ? (<img src={item.avatar} />)
              : <IconUser />
          }
        </Avatar>
      );
    }
  },
  {
    title: '账号',
    dataIndex: 'username',
    align: 'center'
  }, 
  {
    title: '状态',
    dataIndex: 'status',
    align: 'center'
  }, 
  {
    title: '职位',
    dataIndex: 'job_title',
    align: 'center'
  },
  {
    title: '公司',
    dataIndex: 'company',
    align: 'center'
  },
  {
    title: '是否小册作者',
    align: 'center',
    render: (_, item) => {
      return (
        <Tag color={item.is_booklet_author ? 'arcoblue' : 'red'}>
          {item.is_booklet_author === 1 ? '是' : '否'}
        </Tag>
      );
    }
  },
  {
    title: '操作',
    align: 'center',
    render: (col) => {
      return (
        <div className={styles['btn-area']}>
          <Button type='primary'>操作</Button>
          <Button type='primary' status='danger'>禁用</Button>
        </div>
      );
    }
  }
];