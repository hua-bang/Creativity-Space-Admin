import { AuditTypeEnum, UpdateAuditStatusDto } from '@/typings/audit';
import { Button, Input, Message, Modal } from '@arco-design/web-react';
import { AxiosResponse } from 'axios';
import React, { useState } from 'react';

interface AuditModalProps {
  requestFn: (params: UpdateAuditStatusDto) => Promise<AxiosResponse<any>>
  onSuccess?: () => void;
  type: AuditTypeEnum;
  id: string;
  status: number;
  closeFn?: () => void;
}

const AuditModal: React.FC<AuditModalProps> & {
  open: (props: AuditModalProps) => void;
} = ({
  id, 
  type,
  status,
  requestFn,
  onSuccess,
  closeFn
}) => {
  const [ reason, setReason ] = useState('');

  const handleReasonChange = (val: string) => {
    setReason(val);
  }

  const updateArticleStatus = () => {
    requestFn({
      else_id: id,
      status,
      type,
      content: reason,
    }).then(res => {
      onSuccess && onSuccess();
    }).catch(err => {
      Message.warning('请求失败，请重试.');
    })
  }

  return (
    <div>
      <Input placeholder='请输入原因' onChange={handleReasonChange} />
      <div style={{ paddingTop: '20px', textAlign: 'right' }}>
        <Button type="primary" onClick={updateArticleStatus}>确认</Button>
      </div>
    </div>
    
  );
  
}

AuditModal.open = (props: AuditModalProps) => {
  const {
    onSuccess,
    ...rest
  } = props;

  
  const modal = Modal.info({
    title: '审核提示',
    content: (
      <AuditModal 
        {...rest}
        onSuccess={() => {
          modal.close();
          onSuccess && onSuccess();
        }}
        closeFn={() => { modal.close() }}
      />
    ),
    footer: null,
    okButtonProps: {
      style: {
        display: 'none'
      }
    }
  });
};

export default AuditModal;