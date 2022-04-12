import { User, UserStatus } from '@/typings/user';
import { Button, TableColumnProps, Tag } from '@arco-design/web-react';
import Avatar from '@arco-design/web-react/es/Avatar/avatar';
import { ColumnProps } from '@arco-design/web-react/es/Table';
import { IconUser } from '@arco-design/web-react/icon';
import styles from './index.module.scss';
import { USER_STATUS_MAP } from '@/const/user';

export const columns: ColumnProps<User>[] = [
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
    align: 'center',
    render: (_, item) => {
      const status = USER_STATUS_MAP[item.status as UserStatus];
      return (
        <Tag color={status.color}>{status.value}</Tag>
      );
    }
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
    title: '得到点赞数',
    dataIndex: 'get_like_count'
  },
  {
    title: '得到游览数',
    dataIndex: 'get_view_count'
  },
  {
    title: '得到关注数',
    dataIndex: 'follow_count'
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
  }
];