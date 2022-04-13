import { TAG_STATUS_MAP } from '@/const/tag';
import { USER_STATUS_MAP } from '@/const/user';
import { TagStatusEnum } from '@/typings/tag';
import { Form, Input, Select } from '@arco-design/web-react';

const FormItem = Form.Item;
const Option = Select.Option;

export const formColumns = [
  {
    id: 'id',
    render() {
      return (<FormItem label='标签id' field='id'>
        <Input style={{ width: 160 }} placeholder='请输入标签ID' />
      </FormItem>)
    }
  }, 
  {
    id: 'name',
    render() {
      return (
        <FormItem label='标签名' field='name'>
          <Input style={{ width: 160 }} placeholder='请输入标签名' />
        </FormItem>
      );
    }
  },
  {
    id: 'status',
    render() {
      return (
        <FormItem label='状态' field='status'>
          <Select placeholder='选择状态'>
            { 
              Object.keys(TAG_STATUS_MAP).map(key => (
                <Option value={Number(key)}>{ TAG_STATUS_MAP[key as unknown as TagStatusEnum].value }</Option>
              )) 
            }
            </Select>
        </FormItem>
      );
    }
  }
];