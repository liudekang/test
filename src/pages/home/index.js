/*
 * @Author: mikey.liudekang
 * @Date: 2019-09-17 20:58:00
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2020-07-26 20:37:33
 */
import React, { useEffect, useState, useMemo } from 'react';

import { Button, Calendar, Spin } from 'antd';
import service from 'Src/utils/request';
import Player from 'Src/components/Player';
import Panel from 'Src/components/Panel';
import Clock from 'Src/components/Clock';
import DocLists from './components/DocLists';

import styles from './index.css';

const panelConfigs = [
  {
    name: '首页',
    // path:'/'
  }
];

const Home = (props) => {

  const [reqLoading, set_reqLoading] = useState(false);
  const [docArr, set_docArr] = useState([]);

  useEffect(() => {
    getBlogListFn()
  }, [])

  const getBlogListFn = (params = {}) => {
    set_reqLoading(true)
    const query = window.Bmob.Query('blogs');
    query.order('-createdAt');
    query.find().then(res => {
      set_reqLoading(res);
      console.log(118, res)
      set_docArr(res)
      setTimeout(() => {
        set_reqLoading(false)
      }, 200)
    });
  }

  const submitFn = () => {
    service.get('/api/users')
      .then(res => {
        console.log(11, res)
      })
  }

  return (
    <Panel
      className='page-home-panel-wrap'
      panelConfigs={panelConfigs}
    >
      <Spin spinning={reqLoading}>

        <div className={styles.homeWrap} >

          <div className={styles.content}>

            <DocLists
              dataArr={docArr}
            />
          </div>

          <div className={styles.slider}>
            <Calendar
            className={styles.calendar_Wrap}
              // headerRender={() => {
              //   return <div>sss</div>
              // }}
              // locale={{language:'zh-cn'}}// en_US 'zh-cn' zh_CN
              fullscreen={false}
            />
            {/* <img src='https://i.loli.net/2017/08/02/598187babf39e.gif' /> */}
            {/* <img src='/dance.webp' /> */}
            <Clock></Clock>
          </div>
        </div>
      </Spin>
      <Player></Player>
    </Panel>
  )
}

export default Home