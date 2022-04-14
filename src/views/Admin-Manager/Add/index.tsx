import { createAdmin } from "@/api/admin";
import CosUpload from "@/components/Cos-Upload";
import { ADMIN_ROLE_MAP } from "@/const/admin";
import { AdminRoleEnum, CreateAdminDto } from "@/typings/admin";
import { Button, Form, Input, Message, Select } from "@arco-design/web-react";
import useForm from "@arco-design/web-react/es/Form/useForm";
import React, { useState } from "react";

const FormItem = Form.Item;
const Option = Select.Option;

interface AddProps {
  onSuccess?: () => void;
}

const Add: React.FC<AddProps> = ({
  onSuccess
}) => {

  const [form] = useForm();

  const [url, setUrl] = useState('');

  const handleSuccess = (urls: string[]) => {
    setUrl(urls[0]);
  }
  
  const handleSubmit = (data: CreateAdminDto) => {
    const admin = {
      ...data,
      avatar: url
    };
    createAdmin(admin).then(res => {
      Message.success('添加成功');
      onSuccess && onSuccess();
      form.resetFields();
    }).catch((err) => {
      Message.warning(err.message);
    });
  }

  return (
    <Form form={form} onSubmit={handleSubmit}>
      <FormItem label='账号' field="username" required>
        <Input placeholder='请输入账号' />
      </FormItem>
      <FormItem label='姓名' field="name" required>
        <Input placeholder='请输入姓名' />
      </FormItem>
      <FormItem label='密码' field="password" required>
        <Input placeholder='请输入密码' type="password" />
      </FormItem>
      <FormItem required label='头像'> 
        <CosUpload limit={1} onUploadSuccess={handleSuccess} listType="picture-card" />
      </FormItem>
      <FormItem required field='role' label='角色'> 
        <Select placeholder='选择角色'>
            { 
              Object.keys(ADMIN_ROLE_MAP).map(key => (
                <Option value={Number(key)}>{ ADMIN_ROLE_MAP[key as unknown as AdminRoleEnum].value }</Option>
              )) 
            }
          </Select>
      </FormItem>
      <FormItem
        wrapperCol={{
          offset: 5,
        }}
      >
        <Button htmlType="submit" type='primary'>添加</Button>
      </FormItem>
    </Form>
  );
}

export default Add;