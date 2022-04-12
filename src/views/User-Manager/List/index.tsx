import React, { useEffect, useState } from 'react';
import { User, UserStatus } from '@/typings/user';
import { getUserList } from '@/api/user';
import { Button, Input, Message, Modal, Table } from '@arco-design/web-react';
import styles from './index.module.scss';
import { columns as defaultColumns} from './columns';
import { ColumnProps } from '@arco-design/web-react/es/Table';
import { CLIENT_URL } from '@/config/client';
import { auditUser } from '@/api/audit';
import { AuditTypeEnum } from '@/typings/audit';

const UserList: React.FC = () => {

  const [userList, setUserList] = useState<User[]>([]);
  const [ reason, setReason ] = useState('');

  const handleReasonChange = (val: string) => {
    setReason(val);
  }

  const updateUserStatus = (articleId: string, status: UserStatus, index: number) => {
    Modal.confirm({
      title: '填写原因',
      content: (
        <Input placeholder='请输入原因' onChange={handleReasonChange} />
      ),
      onOk() {
        auditUser({
          else_id: articleId,
          content: reason,
          status,
          type: AuditTypeEnum.USER
        }).then(res => {
          Message.success('修改成功');
          userList[index].status = status;
          setUserList(prev => [...prev]);
        }).catch((err) => {
          Message.warning(err.message);
        })
      }
    })
  }

  const loadData = () => {
    getUserList().then(res => {
      setUserList(res.data);
    });
  }

  const toUserDetail = (id: string) => {
    window.open(`${CLIENT_URL}/author/${id}`);
  }

  const operateColumns: ColumnProps<User>[] = [
    {
      title: '操作',
      align: 'center',
      width: 200,
      render: (col, record, index) => {
        return (
          <div className={styles['btn-area']}>            
            <Button type='primary' disabled={record.status !== UserStatus.NORMAL} onClick={() => toUserDetail(record.id) }>详情</Button>
            {
              record.status === UserStatus.FORBIDDEN ? (
                <Button 
                  type='primary'
                  onClick={() => updateUserStatus(record.id, UserStatus.NORMAL, index)}
                >
                  启用
                </Button>
              ) : (
                <Button 
                  type='primary' 
                  status='danger'
                  onClick={() => updateUserStatus(record.id, UserStatus.FORBIDDEN, index)}
                >
                  禁用
                </Button>
              )
            }
            
          </div>
        );
      }
    }
  ];

  const columns = [...defaultColumns, ...operateColumns];

  useEffect(() => {
    loadData();
  }, []);
  
  return (
    <div className={styles['user-list-page']}>
      <h3>用户列表</h3>
      <Table rowKey='id' columns={columns} data={userList}/>
    </div>
  );
};

export default UserList;