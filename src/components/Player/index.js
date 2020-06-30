/*
 * @Author: mikey.liudekang
 * @Date: 2019-09-17 20:58:00
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2019-11-24 20:01:12
 */
import React, { useEffect, useState } from 'react'
import { Menu, Dropdown, Button } from 'antd'

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
    <div className='player_wrapper'>
      {/* <i className='iconfont icon-yinyue'></i> */}
      <div className='player_main'>
        <div className='p_main_left'>
          <dl className='music_title'>
            <dt className='m_icon'><i className='iconfont icon-yinyue'></i> </dt>
            <dd className='m_value'>僕が死のうと思ったのは</dd>
          </dl>
          <dl className='music_user'>
            <dt className='m_icon'><i className='iconfont icon-user'></i> </dt>
            <dd className='m_value'>中島美嘉</dd>
          </dl>
          <dl className='music_folder'>
            <dt className='m_icon'><i className='iconfont icon-wenjianjia'></i> </dt>
            <dd className='m_value'>僕が死のうと思ったのは</dd>
          </dl>

          <p className='m_controlsBtn'>
            上一首
          </p>
        </div>

        <div className='p_main_center'>
          <div className='music_img'>
            <img src='/favicon.ico' />
          </div>
        </div>

        <div className='p_main_right'>
          <dl className='music_times'>
            <dt className='m_icon'><i className='iconfont icon-time'></i> </dt>
            <dd className='m_value'>01:22 / 05:19</dd>
          </dl>
          <dl className='music_types'>
            <dt className='m_icon'><i className='iconfont icon-xunhuan'></i> </dt>
            <dd className='m_value'>顺序播放</dd>
          </dl>
          <dl className='music_lirc'>
            <dt className='m_icon'><i className='iconfont icon-icon_duihao-mian'></i> </dt>
            <dd className='m_value'>歌词隐藏</dd>
          </dl>

          <p className='m_controlsBtn'>
            下一首
          </p>
        </div>
      </div>

      <div className='player_footer'>
        <i className='iconfont icon-iconfontdaohanggonggao'></i>
      progress
        <i className='iconfont icon-xiazai'></i>
        <i className='iconfont icon-kaiguanguan'></i>
        <i className='iconfont icon-mulu'></i>
      </div>
    </div>

  )
}

export default TopNav
