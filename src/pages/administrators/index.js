/*
 * @Author: mikey.liudekang
 * @Date: 2019-09-17 20:58:00
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2020-06-09 22:07:07
 */
import React, { useEffect, useState } from 'react';

import { Table, Tag, Space, message } from 'antd';
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

const administrators = () => {
  const [userList, Set_userList] = useState([])
  useEffect(() => {
    const query = window.Bmob.Query('_User');
    query.limit(10);
    query.find().then(res => {
      if (Array.isArray(res)) {
        const resArr = res.filter(item => (item.leave + '').toLowerCase() === 'p1')
        Set_userList(resArr)
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
      <h6>管理员列表</h6>
      <Table columns={columns} dataSource={userList} />
    </div>
  )
}
export default administrators
