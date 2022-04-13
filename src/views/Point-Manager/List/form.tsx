import { Form, Input } from '@arco-design/web-react';

const FormItem = Form.Item;

export const formColumns = [
  {
    id: 'id',
    render() {
      return (<FormItem label='动态id' field='id'>
        <Input style={{ width: 160 }} placeholder='请输入小册名称' />
      </FormItem>)
    }
  }, 
  {
    id: 'content',
    render() {
      return (
        <FormItem label='动态内容' field='content'>
          <Input style={{ width: 160 }} placeholder='请输入小册名称' />
        </FormItem>
      );
    }
  }
];