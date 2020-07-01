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
      {/* <i className='iconfont iconyinyue'></i> */}
      <div className='player_main'>
        <div className='p_main_info p_main_left'>
          <dl className='music_info_item music_title'>
            <dt className='m_icon'><i className='iconfont iconyinyue'></i> </dt>
            <dd className='m_value'>僕が死のうと思ったのは</dd>
          </dl>
          <dl className='music_info_item music_user'>
            <dt className='m_icon'><i className='iconfont iconuser'></i> </dt>
            <dd className='m_value'>中島美嘉</dd>
          </dl>
          <dl className='music_info_item music_folder'>
            <dt className='m_icon'><i className='iconfont iconwenjianjia'></i> </dt>
            <dd className='m_value'>僕が死のうと思ったのは</dd>
          </dl>

          <p className='m_controlsBtn'>
            <i className='iconfont iconxunhuan'></i>
            <i className='iconfont iconxiayishou1'></i>
          </p>
        </div>

        <div className='p_main_center'>
          <div className='music_img'>
            {/* <img src='/favicon.ico' /> */}
            <img src='/image.png' alt='' srcSet='' />
          </div>
          <div className='Play_pause_btns'>
            <i className='iconfont iconbofang'></i>
          </div>
          <svg className='Play_pause_progress' width='40' height='40'>
            <circle cx='20' cy='20' r='17' strokeWidth='2' stroke='rgb(108, 105, 113)' fill='none'></circle>
            <circle id='c1' cx='20' cy='20' r='17' strokeWidth='2' stroke='#f30' fill='none' transform='matrix(0,-1,1,0,0,40)' strokeDasharray=''></circle>
          </svg>
        </div>

        <div className='p_main_info p_main_right'>
          <dl className='music_info_item music_times'>
            <dt className='m_icon'><i className='iconfont icontime'></i> </dt>
            <dd className='m_value'>01:22 / 05:19</dd>
          </dl>
          <dl className='music_info_item music_types'>
            <dt className='m_icon'><i className='iconfont iconxunhuan'></i> </dt>
            <dd className='m_value'>顺序播放</dd>
          </dl>
          <dl className='music_info_item music_lirc'>
            <dt className='m_icon'><i className='iconfont iconicon_duihao-mian'></i> </dt>
            <dd className='m_value'>歌词隐藏</dd>
          </dl>

          <p className='m_controlsBtn'>
            <i className='iconfont iconxiayishou'></i>
            <i className='iconfont iconsuiji'></i>
          </p>
        </div>
      </div>

      <div className='player_footer'>
        <i className='iconfont iconiconfontdaohanggonggao'></i>
        <span className='progress'>progress</span>
        <i className='iconfont iconxiazai'></i>
        <i className='iconfont iconkaiguanguan'></i>
        <i className='iconfont iconmulu'></i>
      </div>
    </div>

  )
}

export default TopNav
