import { createTag } from '@/api/tag';
import { Button, Input, Message } from '@arco-design/web-react';
import React, { useState } from 'react';

const Add = () => {
  const [val, setVal] = useState('');
  
  const handleChange = (value: string) => {
    setVal(value);
  }
  
  const addTag = () => {
    createTag(val).then(re => {
      Message.success('新增成功，请自行刷新列表');
    }).catch(err => {
      Message.warning(err.message);
    });
  }

  return (
    <div>
      <Input value={val} onChange={handleChange} />
      <div style={{ paddingTop: '20px', textAlign: 'center' }}>
        <Button type='primary' onClick={addTag}>添加</Button>
      </div>
    </div>
  );
}

export default Add;