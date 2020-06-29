/*
 * @Author: mikey.liudekang
 * @Date: 2019-09-17 20:58:00
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2019-11-24 20:01:12
 */
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Menu, Dropdown, Button } from 'antd'
import routeConfig from 'Src/router/routeConfig'
import useConnect from 'Src/contextRedux/useConext';
import { storeContext } from 'Src/contextRedux/store';

import styles from './index.css';

const TopNav = () => {
  const { state, dispatch, } = useConnect(storeContext);
  const [isLogin, set_isLogin] = useState(false)
  const [user, set_user] = useState({})
  useEffect(() => {
    const current = window.Bmob ? window.Bmob.User.current() : null;
    if (current && typeof current === 'object') {
      window.user = current
      set_user(current)
      set_isLogin(true)
    }
    console.log('user===', current)
  }, [state.userName])

  const loginOutFn = () => {
    window.Bmob && window.Bmob.User.logout();
    set_user({})
    set_isLogin(false)
    window.user = null
  }

  return (
    <nav className={styles.nav_Topper_Wrap}>
      <div className={styles.nav_Topper_inner}>
        {/* <h5 className={styles.user_name}>德康 空间</h5> */}
        <ul className={styles.nav_List}>
          {
            routeConfig.routes.map(item => (
              item.show && <li className={styles.nav_Item} key={item.path}><Link to={item.path}>{item.name}</Link></li>
            ))
          }
        </ul>

        <div className={styles.nav_topper_right}>
          {
            isLogin
              ? <Dropdown overlay={<Menu>
                <Menu.Item>

                个人中心
                  {/* <a target='_blank' rel='noopener noreferrer' href='http://www.alipay.com/'>
                  </a> */}
                </Menu.Item>
                <Menu.Item>
                  <Link to='/setting/administrators'>设置</Link>
                </Menu.Item>
                <Menu.Item>
                  <span onClick={loginOutFn}>
                  退出登录
                  </span>
                </Menu.Item>
              </Menu>} placement='bottomRight'>
                <Button>{user.username}</Button>
              </Dropdown>
              : <Link className={styles.login_btn} to='/login'>登录/注册</Link>
          }

        </div>
      </div>
    </nav>
  )
}

export default TopNav
