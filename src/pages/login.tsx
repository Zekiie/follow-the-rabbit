import React, { FC } from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import { Main } from 'components/common/main';
import 'styles/global.css';
import { loginForm, loginInput, loginButton } from 'styles/login.css';
import { typographyMainSmall, typographyUppercase } from 'styles/main.css';

const customStyles = {
  display: 'flex',
};

const LoginPage: FC<PageProps> = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <Main customStyles={customStyles}>
      <Form
        name="normal_login"
        className={loginForm}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            className={loginInput}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            className={loginInput}
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox className={typographyMainSmall}>Remember me</Checkbox>
          </Form.Item>

          <a href="">Forgot password</a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className={loginButton}>
            Log in
          </Button>
          <a href="" className={typographyUppercase}>
            register now!
          </a>
        </Form.Item>
      </Form>
    </Main>
  );
};

export default LoginPage;

export const Head: HeadFC = () => <title>Login Page</title>;
