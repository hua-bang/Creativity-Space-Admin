import React, { useState } from "react";
import styles from './index.module.scss';
import { Form, Input, Button, Message } from '@arco-design/web-react';
import { IconLock, IconUser } from "@arco-design/web-react/icon";
import { login } from "@/api/admin";
import useToken from '@/hooks/useToken';
import useStore from '@/hooks/useStore';
import { useNavigate } from 'react-router-dom';

interface LoginFormProps {
  username: string;
  password: string;
}

const FormItem = Form.Item;

const Login: React.FC = () => {

  const [loading, setLoading] = useState(false);
  const [, setToken] = useToken();
  const { userStore } = useStore();
  const navigate = useNavigate();

  const handSubmit = (data: LoginFormProps) => {
    setLoading(true);
    const { username, password } = data;

    login(username, password).then(res => {
      Message.success('登录成功');
      const { access_token, userInfo, roles } = res.data;
      setToken(access_token);
      userStore.setUser(userInfo, roles);
      setTimeout(() => {
        navigate('/dashBoard/home');
      }, 1000);
    }).catch(err => {
      Message.warning(err.Message);
    }).finally(() => {
      setLoading(false);
    });
  }

  return (
    <div className={styles['login-page']}>
      <div className={styles['login-area']}>
        <div className={styles['login-area-title']}>Login to Creativity-Space Admin</div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Form<LoginFormProps> onSubmit={handSubmit} wrapperCol={{ span: 24, offset: 0 }}>
            <FormItem field="username">
              <Input prefix={<IconUser />} placeholder='请输入用户名' />
            </FormItem>
            <FormItem field="password">
              <Input type='password' prefix={<IconLock />} placeholder='请输入密码' />
            </FormItem>
            <FormItem>
              <Button loading={loading} type='primary' htmlType='submit' long>登录</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;