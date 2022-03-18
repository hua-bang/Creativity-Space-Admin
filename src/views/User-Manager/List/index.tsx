import React, { useEffect, useState } from 'react';
import { User } from '@/typings/user';
import { getUserList } from '@/api/user';
import { Table } from '@arco-design/web-react';
import styles from './index.module.scss';
import { columns } from './columns';

const UserList: React.FC = () => {

  const [userList, setUserList] = useState<User[]>([]);
  
  const loadData = () => {
    getUserList().then(res => {
      setUserList(res.data);
    });
  }

  useEffect(() => {
    loadData();
  }, []);
  
  return (
    <div className={styles['user-list-page']}>
      <h3>用户列表</h3>
      <Table columns={columns} data={userList}/>
    </div>
  );
};

export default UserList;