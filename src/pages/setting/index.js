/*
 * @Author: mikey.liudekang
 * @Date: 2019-09-17 20:58:00
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2020-06-09 22:07:07
 */
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd';
import RouterView from 'Src/router/RouterView'
import service from 'Src/utils/request';

import styles from './index.css'

const Setting = (props) => {
  useEffect(() => {
    console.log(177, props)
  }, [])
  return (
    <div className={styles.login} >
      <div>
        <NavLink to='/setting/administrators'>管理员列表</NavLink>
        <NavLink to='/setting/userList'>用户列表</NavLink>
      </div>
      <div className={styles.pageWrapper}>
        <RouterView routes={props.routes} />
      </div>
    </div>
  )
}
export default Setting

