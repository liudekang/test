/*
 * @Author: mikey.liudekang
 * @Date: 2019-09-17 20:58:00
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2020-06-09 22:07:07
 */
import React from 'react';

import { Button } from 'antd';
import service from 'Src/utils/request';

import styles from './index.css'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  submitFn = () => {
    service.get('/api/users')
      .then(res => {
        console.log(11, res)
      })
  }

  render = () => {
    return (
      <div className={styles.homeWrap} >
        <h5>当前首页</h5>
        <Button onClick={this.submitFn}>annu</Button>
        <img src='https://i.loli.net/2017/08/02/598187babf39e.gif' />
      </div>
    )
  }
}
