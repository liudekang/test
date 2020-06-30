/*
 * @Author: mikey.liudekang
 * @Date: 2019-09-17 20:58:00
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2019-11-24 20:01:12
 */
import React from 'react'
import { Spin } from 'antd'

import styles from './index.css';
const Loading = () => {
  return (
    <div className={styles.loadin_wrap}>
      <img src='/dance.webp' alt='loading....' />
      <h5 className={styles.title}>拼命加载中 ... ...</h5>
      <Spin></Spin>
    </div>
  )
}

export default Loading
