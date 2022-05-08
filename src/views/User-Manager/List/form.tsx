import { USER_BOOKLET_MAP, USER_BOOKLET_MAP_KEY, USER_STATUS_MAP } from '@/const/user';
import { UserStatus } from '@/typings/user';
import { Form, Input, Select } from '@arco-design/web-react';

const FormItem = Form.Item;
const Option = Select.Option;

export const formColumns = [
  {
    id: 'id',
    render() {
      return (<FormItem label='用户id' field='id'>
        <Input style={{ width: 160 }} placeholder='请输入用户ID' />
      </FormItem>)
    }
  }, 
  {
    id: 'name',
    render() {
      return (
        <FormItem label='用户姓名' field='name'>
          <Input style={{ width: 160 }} placeholder='请输入用户姓名' />
        </FormItem>
      );
    }
  },
  {
    id: 'username',
    render() {
      return (
        <FormItem label='昵称' field='username'>
          <Input style={{ width: 160 }} placeholder='请输入用户昵称' />
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
              Object.keys(USER_STATUS_MAP).map(key => (
                <Option value={Number(key)}>{ USER_STATUS_MAP[key as unknown as UserStatus].value }</Option>
              )) 
            }
            </Select>
        </FormItem>
      );
    }
  },
  {
    id: 'is_booklet_author',
    render() {
      return (
        <FormItem label='是否小册作者' field='is_booklet_author'>
          <Select placeholder='选择状态'>
            { 
              Object.keys(USER_BOOKLET_MAP).map(key => (
                <Option value={Number(key)}>{ USER_BOOKLET_MAP[key as unknown as USER_BOOKLET_MAP_KEY].value }</Option>
              )) 
            }
            </Select>
        </FormItem>
      );
    }
  }
];