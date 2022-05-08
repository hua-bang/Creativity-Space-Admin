import React, { useEffect, useState } from 'react';
import { User, UserStatus } from '@/typings/user';
import { getUserList, queryUser } from '@/api/user';
import { Button, Input, Message, Modal, Table, Tag } from '@arco-design/web-react';
import styles from './index.module.scss';
import { columns as defaultColumns} from './columns';
import { ColumnProps } from '@arco-design/web-react/es/Table';
import { CLIENT_URL } from '@/config/client';
import { auditUser } from '@/api/audit';
import { AuditTypeEnum } from '@/typings/audit';
import ProTable from '@/components/Pro-Table';
import { formColumns } from './form';
import { USER_BOOKLET_MAP, USER_BOOKLET_MAP_KEY } from '@/const/user';
import { auditUserBookletAuthor } from '@/api/admin';

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

  const updateUserBookletAuthor = (userId: string, status: string, index: number) => {
    auditUserBookletAuthor(userId, status).then(res => {
      Message.success('修改成功');
      userList[index].is_booklet_author = status as any;
      setUserList(prev => [...prev]);
    }).catch((err) => {
      Message.warning(err.message);
    })
  }

  const toUserDetail = (id: string) => {
    window.open(`${CLIENT_URL}/author/${id}`);
  }

  const operateColumns: ColumnProps<User>[] = [
    {
      title: '是否小册作者',
      align: 'center',
      render: (_, item) => {
        const bookletInfo = USER_BOOKLET_MAP[item.is_booklet_author as USER_BOOKLET_MAP_KEY];
        console.log(item.is_booklet_author, bookletInfo);
        return (
          <Tag color={bookletInfo?.color}>
            {bookletInfo?.value}
          </Tag>
        );
      }
    },
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
            {
              record.is_booklet_author === 2 && (
                <div className={styles['booklet-btn-area']} style={{ padding: '10px 0' }}>
                  <Button 
                    type='primary'
                    onClick={() => updateUserBookletAuthor(record.id, '1', index)}
                  >
                    审核小册作者通过
                  </Button>
                  <Button 
                    type='primary'
                    status='danger'
                    onClick={() => updateUserBookletAuthor(record.id, '-1', index)}
                  >
                    审核小册作者不通过
                  </Button>
                </div>
              )
            }
            
          </div>
        );
      }
    }
  ];

  const columns = [...defaultColumns, ...operateColumns];

  const handleDataChange = (data: User[]) => {
    setUserList(data);
  }
  
  return (
    <div className={styles['user-list-page']}>
      <h3>用户列表</h3>
      <ProTable
        columns={columns}
        formColumns={formColumns}
        requestFn={queryUser}
        data={userList}
        onDataChange={handleDataChange}
      />
    </div>
  );
};

export default UserList;