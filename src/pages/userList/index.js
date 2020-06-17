/*
 * @Author: mikey.liudekang
 * @Date: 2019-09-17 20:58:00
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2020-06-09 22:07:07
 */
import React, { useState, useEffect } from 'react';

import { Table, Tag, message } from 'antd';
import service from 'Src/utils/request';

import styles from './index.css'

const columns = [
  {
    title: 'objectId',
    dataIndex: 'objectId',
    key: 'objectId',
  },
  {
    title: '用户名',
    dataIndex: 'username',
    key: 'username',
    // render: text => <a>{text}</a>,
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: '手机号',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: '最近活跃时间',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
  },
];
const UserList = () => {
  const [userList, Set_userList] = useState([])
  useEffect(() => {
    const query = window.Bmob.Query('_User');
    query.find().then(res => {
      if (Array.isArray(res)) {
        Set_userList(res)
      }
    }).catch(err => {
      console.log(err)
      if (typeof err.error === 'string') {
        message.warning(err.error.slice(0, 300))
      } else {
        message.error('操作失败')
      }
    });
  }, [])
  return (
    <div className={styles.login} >
      <h6>用户列表信息</h6>
      <Table columns={columns} dataSource={userList} />
    </div>
  )
}
export default UserList
