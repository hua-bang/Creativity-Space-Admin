import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Button, Message, Modal, Table } from '@arco-design/web-react';
import { columns } from './columns';
import { Admin, AdminRoleEnum, AdminStatusEnum } from '@/typings/admin';
import { getAdminList, queryAdminList } from '@/api/admin';
import ProTable from '@/components/Pro-Table';
import { formColumns } from './form';
import AuditModal from '@/components/Audit-Modal';
import { AuditTypeEnum } from '@/typings/audit';
import { auditAdmin } from '@/api/audit';
import { columns as defaultColumns } from './columns';
import { ColumnProps } from '@arco-design/web-react/es/Table';
import Add from '../Add';


const AdminList: React.FC = () => {
  const [adminList, setAdminList] = useState<Admin[]>([]);
  const [visible, setVisible] = useState<boolean>(false);
  const [params, setParams] = useState({});

  const handleDataChange = (data: Admin[]) => {
    setAdminList(data);
  }

  const audit = (id: string, status: AdminStatusEnum, index: number) => {
    AuditModal.open({
      id,
      status,
      type: AuditTypeEnum.ADMIN,
      requestFn: auditAdmin,
      onSuccess() {
        adminList[index].status = status;
        setAdminList(prev => [...prev]);
        Message.success('操作成功');
      }
    });
  }

  const operateColumns: ColumnProps<Admin>[] = [
    {
      title: '操作',
      align: 'center',
      width: 240,
      render: (col, record, index) => {
        const canEdit = record.role !== AdminRoleEnum.SUPER;
        return (
          <div className={styles['btn-area']}>
            <Button disabled={!canEdit} type='primary' onClick={() => { audit(record.id, AdminStatusEnum.NORMAL, index) }} >启用</Button>
            <Button disabled={!canEdit} type='primary' status='danger' onClick={() => { audit(record.id, AdminStatusEnum.FORBIDDEN, index) }}>禁用</Button>
          </div>
        );
      }
    }
  ];

  const handleAddSuccess = () => {
    setParams({});
    setVisible(false);
  };

  const columns = [...defaultColumns, ...operateColumns];
  
  return (
    <div className={styles['article-list-page']}>
      <h3>管理员列表</h3>
      <ProTable 
        formColumns={formColumns}
        customToolsArea={
          (
            <Button type='primary' onClick={() => setVisible(true)}>添加管理员</Button>
          )
        }
        requestFn={queryAdminList}
        columns={columns}
        data={adminList}
        onDataChange={handleDataChange}
        defaultParams={params}
      />
      <Modal
        closable
        onCancel={() => setVisible(false)}
        visible={visible}
        title="添加管理员"
        footer={null}
      >
        <Add onSuccess={handleAddSuccess} /> 
      </Modal>
    </div>
  );
};

export default AdminList;