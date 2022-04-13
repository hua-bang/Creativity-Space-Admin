import React, { useState } from 'react';
import ProTable from '@/components/Pro-Table';
import { Tag, TagStatusEnum } from '@/typings/tag';
import { columns as defaultColumns } from './columns';
import { createTag, queryTag } from '@/api/tag';
import { ColumnProps } from '@arco-design/web-react/es/Table';
import { Button, Input, Message, Modal } from '@arco-design/web-react';
import { formColumns } from './form';
import AuditModal from '@/components/Audit-Modal';
import { AuditTypeEnum } from '@/typings/audit';
import { auditTag } from '@/api/audit';
import Add from './add';

const TagList = () => {
  const [tags, setTags] = useState<Tag[]>([]);

  const handleDataChange = (data: Tag[]) => {
    setTags(data);
  }

  const audit = (id: string, status: TagStatusEnum, index: number) => {
    AuditModal.open({
      id,
      status,
      type: AuditTypeEnum.TAG,
      requestFn: auditTag,
      onSuccess() {
        tags[index].status = status;
        setTags(prev => [...prev]);
        Message.success('操作成功');
      }
    });
  }

  const operateColumns: ColumnProps<Tag>[] = [
    {
      title: '操作',
      render(_: unknown, record, index) {
        return (
          <div>
            <Button 
              type='primary'
              style={{ marginRight: '10px' }}
              onClick={() => { audit(record.id, TagStatusEnum.NORMAL, index); }}
            >
              启用
            </Button>
            <Button 
              status='danger'
              type='primary'
              onClick={() => { audit(record.id, TagStatusEnum.FORBIDDEN, index); }}
            >
              禁用
            </Button>
          </div>
          
        );
      }
    },
    
  ];

  const columns = [...defaultColumns, ...operateColumns];

  const addTag = () => {
    Modal.info({
      title: '添加标签',
      content: (
        <Add />
      ),
      okButtonProps: {
        style: {
          display: 'none'
        }
      }
    })
  }

  return (
    <ProTable
      customToolsArea={
        (
          <Button type='primary' onClick={addTag}>
            添加
          </Button>
        )
      }
      data={tags}
      columns={columns}
      formColumns={formColumns}
      requestFn={queryTag}
      onDataChange={handleDataChange}
    />
  );
};

export default TagList;