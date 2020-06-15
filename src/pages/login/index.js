/*
 * @Author: mikey.liudekang
 * @Date: 2019-09-17 20:58:00
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2020-06-09 22:07:07
 */
import React, { useForm } from 'react';

import { Form, Input, Button, Tabs, message } from 'antd';
import { UserOutlined, LockOutlined, WhatsAppOutlined, VerifiedOutlined, MailOutlined } from '@ant-design/icons';
import service from 'Src/utils/request';

import styles from './index.css'
import { useEffect } from 'react';

const { TabPane, } = Tabs;
const layout = {
  labelCol: { span: 8, },
  wrapperCol: { span: 16, },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16, },
};

const Login = (props) => {
  const [form] = Form.useForm();
  useEffect(() => {
    console.log(222, window.Bmob, props)
    // Bmob.User.users().then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })

    const current = window.Bmob.User.current()
    console.log(111, current)
  }, [])
  // submitFn = () => {
  //   // service.get('/api/users')
  //   //   .then(res => {
  //   //     console.log(11, res)
  //   //   })
  // }
  const onLoginFinish = values => {
    console.log('Success:', values);
    window.Bmob.User.login(values.username, values.password).then(res => {
      console.log(res)
      message.success('登录成功');
      setTimeout(() => {
        // props.history.goBack()
        props?.history?.goBack()
      }, 500)
    }).catch(err => {
      console.log(err)
      if (typeof err.error === 'string') {
        message.warning(err.error.slice(0, 300))
      } else {
        message.error('操作失败')
      }
    });
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  const onRegisterFinish = (values) => {
    console.log(66, values);
    window.Bmob.User.register(values).then(res => {
      message.success('注册成功');
    }).catch(err => {
      if (typeof err.error === 'string') {
        message.warning(err.error.slice(0, 300))
      } else {
        message.error('操作失败')
      }
      console.warn(44, err)
    });
  };
  const getsmsCodeFn = () => {
    const phonee = form.getFieldValue('phone')
    console.log('444:', phonee);
  };
  return (
    <div className={styles.login} >
      <Tabs
        defaultActiveKey='login'
      // onChange={callback}
      >
        <TabPane tab='登录' key='login'>
          <Form
            className={styles.form_wrap}
            form={form}
            name='login'
            // initialValues={{ remember: true, }}
            onFinish={onLoginFinish}
            // onFinishFailed={onFinishFailed}
          >
            <Form.Item
              // label='用户名'
              name='username'
              rules={[{ required: true, message: '请输入用户名或者手机号', }]}
            >
              <Input
                placeholder='请输入用户名或者手机号'
                prefix={<UserOutlined className='site-form-item-icon' />}
              />
            </Form.Item>

            <Form.Item
              // label='密码'
              name='password'
              rules={[{ required: true, message: '请输入密码', }]}
            >
              <Input.Password
                placeholder='请输入密码'
                prefix={<LockOutlined className='site-form-item-icon' />}
              />
            </Form.Item>

            <Form.Item >
              <Button type='primary' htmlType='submit'>登录</Button>
              {/* <Button className={styles.reset_btn} onClick={onReset}>重置</Button> */}
            </Form.Item>
          </Form>

        </TabPane>
        <TabPane tab='注册' key='register'>
          <Form
            className={styles.form_wrap}
            form={form}
            name='register'
            // initialValues={{ remember: true, }}
            onFinish={onRegisterFinish}
            // onFinishFailed={onFinishFailed}
          >
            <Form.Item
              // label='用户名'
              name='username'
              rules={[{ required: true, message: '请输入用户名', }]}
            >
              <Input
                placeholder='请输入用户名'
                prefix={<UserOutlined className='site-form-item-icon' />}
              />
            </Form.Item>
            <Form.Item
              // label='邮箱'
              name='email'
              rules={[
                {
                  type: 'email',
                  message: '请输入正确格式的邮箱',
                },
                {
                  required: true,
                  message: '请输入邮箱',
                },
              ]}
            >
              <Input
                placeholder='请输入邮箱'
                prefix={<MailOutlined className='site-form-item-icon' />}
              />
            </Form.Item>
            <Form.Item
              // label='手机号'
              name='phone'
              rules={[
                {
                  pattern: /^1[3456789]\d{9}$/,
                  message: '请输入正确格式的手机号',
                },
                {
                  required: false,
                  message: '请输入手机号',
                },
              ]}
            >
              <Input
                placeholder='请输入手机号'
                prefix={<WhatsAppOutlined className='site-form-item-icon' />} />
            </Form.Item>
            {/* <Form.Item
              // label='验证码'
              name='smsCode'
              rules={[{ required: true, message: '请输入验证码', }]}
            >
              <Input.Search
                enterButton='获取验证码'
                placeholder='请输入手机验证码'
                onSearch={getsmsCodeFn}
                prefix={<VerifiedOutlined className='site-form-item-icon' />}
              />
            </Form.Item> */}
            <Form.Item
              // label='密码'
              name='password'
              rules={[{ required: true, message: '请输入密码', }]}
            >
              <Input.Password
                placeholder='请输入密码'
                prefix={<LockOutlined className='site-form-item-icon' />}
              />
            </Form.Item>

            <Form.Item >
              <Button type='primary' htmlType='submit'>注册</Button>
            </Form.Item>
          </Form>

        </TabPane>
      </Tabs>

    </div>
  )
}
export default Login
