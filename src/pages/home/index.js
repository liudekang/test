/*
 * @Author: mikey.liudekang
 * @Date: 2019-09-17 20:58:00
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2020-07-26 20:37:33
 */
import React from 'react';

import { Button, Calendar } from 'antd';
import service from 'Src/utils/request';
import Player from 'Src/components/Player';
import Panel from 'Src/components/Panel';
import Clock from 'Src/components/Clock';

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
      <Panel>
        <div className={styles.homeWrap} >

          <div className={styles.content}>
            <h5 className={styles.title}>网页添加 Live2D 看板娘</h5>
            <h5>当前首页</h5>
            <Button onClick={this.submitFn}>annu</Button>
            <Player></Player>
          </div>

          <div className={styles.slider}>
            <Calendar
              // headerRender={() => {
              //   return <div>sss</div>
              // }}
              locale='zh_CN' // en_US 'zh-cn'
              fullscreen={false}
            />
            {/* <img src='https://i.loli.net/2017/08/02/598187babf39e.gif' /> */}
            <img src='/dance.webp' />
            <Clock></Clock>
          </div>
        </div>

      </Panel>

    )
  }
}
