import { ADMIN_ROLE_MAP, ADMIN_STATUS_MAP } from '@/const/admin';
import { AdminRoleEnum, AdminStatusEnum } from '@/typings/admin';
import { TagStatusEnum } from '@/typings/tag';
import { Form, Input, Select } from '@arco-design/web-react';

const FormItem = Form.Item;
const Option = Select.Option;

export const formColumns = [
  {
    id: 'id',
    render() {
      return (<FormItem label='id' field='id'>
        <Input style={{ width: 100 }} placeholder='请输入ID' />
      </FormItem>)
    }
  }, 
  {
    id: 'name',
    render() {
      return (
        <FormItem label='姓名' field='name'>
          <Input style={{ width: 130 }} placeholder='请输入名称' />
        </FormItem>
      );
    }
  },
  {
    id: 'username',
    render() {
      return (
        <FormItem label='用户名' field='username'>
          <Input style={{ width: 130 }} placeholder='请输入用户名' />
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
              Object.keys(ADMIN_STATUS_MAP).map(key => (
                <Option value={Number(key)}>{ ADMIN_STATUS_MAP[key as unknown as AdminStatusEnum].value }</Option>
              )) 
            }
            </Select>
        </FormItem>
      );
    }
  },
  {
    id: 'role',
    render() {
      return (
        <FormItem label='角色' field='role'>
          <Select placeholder='选择角色'>
            { 
              Object.keys(ADMIN_ROLE_MAP).map(key => (
                <Option value={Number(key)}>{ ADMIN_ROLE_MAP[key as unknown as AdminRoleEnum].value }</Option>
              )) 
            }
            </Select>
        </FormItem>
      );
    }
  }
];