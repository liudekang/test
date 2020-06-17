/*
 * @Author: mikey.liudekang
 * @Date: 2019-09-17 20:58:08
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2019-11-24 19:46:18
 */
import React, { useEffect, useReducer } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import RouterView from './router/RouterView'
import routeConfig from './router/routeConfig'
import TopNav from './components/TopNav'
import classnames from 'classnames'
import Bmob from 'hydrogen-js-sdk';
import Provider from './contextRedux/Provider';
import { initialState as store, reducer } from './contextRedux/store';

import styles from './App.css'

// 项目其他页面使用跟小程序一样使用Bmob对象即可，例如：
Bmob.initialize('e99514db934fd60b', '411527');
window.Bmob = Bmob;

function App() {
  const [state, dispatch] = useReducer(reducer, store);
  useEffect(() => {
    // 初始化 SDK版本 2.0.0 以下保留之前的初始化方法
    // Bmob.initialize("你的Application ID", "你的REST API Key");
    // Bmob.initialize("你的Secret Key", "你的API 安全码");

    // Bmob.User.users().then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })
    // 项目其他页面使用跟小程序一样使用Bmob对象即可，例如：
    // const params = {
    //   username: 'dekang411527',
    //   password: '411527hns',
    //   email: '1530383507@qq.com',
    //   phone: '18510253122',
    // }

    // Bmob.User.login(params.username, params.password).then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.warn(err)
    // });
  }, [])

  return (
    <Router>
      <div className={classnames({
        [styles['reactwrapper']]: true,
        [styles.ee]: false,
      })}>
        <Provider store={{ state, dispatch, }}>
          <TopNav></TopNav>
          <div className={styles.pageWrapper}>
            <RouterView routes={routeConfig.routes} />
          </div>
        </Provider>

      </div>
    </Router>
  )
}

export default App
