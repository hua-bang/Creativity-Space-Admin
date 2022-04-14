import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Table } from '@arco-design/web-react';
import { columns } from './columns';
import { Admin } from '@/typings/admin';
import { getAdminList, queryAdminList } from '@/api/admin';
import ProTable from '@/components/Pro-Table';
import { formColumns } from './form';

const AdminList: React.FC = () => {
  const [adminList, setAdminList] = useState<Admin[]>([]);
  
  const handleDataChange = (data: Admin[]) => {
    setAdminList(data);
  }
  
  return (
    <div className={styles['article-list-page']}>
      <h3>管理员列表</h3>
      <ProTable 
        formColumns={formColumns}
        requestFn={queryAdminList}
        columns={columns}
        data={adminList}
        onDataChange={handleDataChange}
      />
    </div>
  );
};

export default AdminList;