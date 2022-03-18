import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Table } from '@arco-design/web-react';
import { columns } from './columns';
import { Admin } from '@/typings/admin';
import { getAdminList } from '@/api/admin';

const AdminList: React.FC = () => {
  const [adminList, setAdminList] = useState<Admin[]>([]);
  
  const loadData = () => {
    getAdminList().then(res => {
      setAdminList(res.data);
    });
  }

  useEffect(() => {
    loadData();
  }, []);

  
  return (
    <div className={styles['article-list-page']}>
      <h3>文章列表</h3>
      <Table rowKey='id' columns={columns} data={adminList}/>
    </div>
  );
};

export default AdminList;