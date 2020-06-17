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

const Login = (props) => {
  const [form] = Form.useForm();
  useEffect(() => {
    // console.log(222, window.Bmob, props)
    // // Bmob.User.users().then(res => {
    // //   console.log(res)
    // // }).catch(err => {
    // //   console.log(err)
    // // })

    // const current = window.Bmob.User.current()
    // console.log(111, current)
  }, [])

  return (
    <div className={styles.login} >
    所发生的发送到
    </div>
  )
}
export default Login
