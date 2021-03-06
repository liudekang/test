/*
 * @Author: mikey.liudekang
 * @Date: 2019-09-17 20:58:00
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2019-11-24 20:01:12
 */
import React, { useEffect, useState } from 'react'
import { Menu, Dropdown, Button } from 'antd'
import PropTypes from 'prop-types'

import styles from './index.css';
import './index.less';
const TopNav = () => {
  const [isLogin, set_isLogin] = useState(false)
  useEffect(() => {
    // const current = window.Bmob ? window.Bmob.User.current() : null;
    // if (current && typeof current === 'object') {
    //   window.user = current
    //   set_user(current)
    //   set_isLogin(true)
    // }
    // console.log('user===', current)
  }, [])

  const loginOutFn = () => {
    // window.Bmob && window.Bmob.User.logout();
    // set_user({})
    // set_isLogin(false)
    // window.user = null
  }

  return (
    <div className={styles.nav_Topper_inner}>

    </div>

  )
}
TopNav.propTypes = {
  // 引入prop-types后，使用方式和之前相同
  height: PropTypes.number,
}
TopNav.defaultProps = {
  height: 500,
}
export default TopNav
