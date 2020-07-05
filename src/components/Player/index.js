/*
 * @Author: mikey.liudekang
 * @Date: 2019-09-17 20:58:00
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2019-11-24 20:01:12
 */
import React, { useEffect, useState, useRef } from 'react'
import { Menu, Dropdown, Button, Progress } from 'antd'
import service from 'Src/utils/request';

import MusicList from './MusicList';

import './index.less';

const perimeter = Math.PI * 2 * 19;
const time_interval = 1;

const TopNav = () => {
  const [isLogin, set_isLogin] = useState(false)
  const [isPlay, set_isPlay] = useState(false)
  const [playPercent, set_playPercent] = useState(0)

  const couterRef = useRef();
  const couterRef2 = useRef();
  couterRef.current = playPercent;
  useEffect(() => {
    // service.get('/api/users')
    // .then(res => {
    //   console.log(11, res)
    // })

    return () => {
      console.log(3333, couterRef2.current)
      clearInterval(couterRef2.current)
    }
  }, [])

  const changPlayPauseFn = () => {
    // let percent = 0;
    if (isPlay) {
      set_isPlay(false);
      // console.log(42222, couterRef2.current)
      clearInterval(couterRef2.current)
    } else {
      set_isPlay(true)
      // const circle = couterRef.current;
      // var circle = document.getElementById('c1');
      couterRef2.current = setInterval(() => {
        console.log(4333, couterRef.current + 0.05, playPercent, couterRef.current);
        set_playPercent(couterRef.current + 0.05)
        if (couterRef.current > 1) {
          clearInterval(couterRef2.current)
        }
      }, 500)
    }
    // var circle = document.getElementById("c1");
    // var percent = 0.7,
    //     perimeter = Math.PI * 2 * 17;
    // circle.setAttribute('stroke-dasharray', perimeter * percent + " " + perimeter * (1 - percent));
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
            <img src='/image.png' alt='' srcSet='' />
          </div>
          {/* 播放暂停按钮 */}
          <div className='Play_pause_btns' onClick={changPlayPauseFn}>
            {
              isPlay ? <i className='iconfont iconzanting'></i> : <i className='iconfont iconbofang'></i>
            }
          </div>
          {/* 进度条 */}
          <svg className='Play_pause_progress' width='40' height='40' >
            <circle cx='20' cy='20' r='19' strokeWidth='4' stroke='rgb(108, 105, 113)' fill='black'></circle>
            <circle strokeDasharray={isPlay ? perimeter * playPercent + ' ' + perimeter * (1 - playPercent) : ''} id='c1' cx='20' cy='20' r='19' strokeWidth='4' stroke={isPlay ? 'rgb(129, 195, 0)' : '#f30'} fill='none' transform='matrix(0,-1,1,0,0,40)' ></circle>
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
        <div className='progress_wrap'>
          <Progress
            className='progress'
            percent={playPercent * 100}
            strokeColor='#81c300'
            trailColor='#818680'
            strokeWidth={5}
            showInfo={false}
          />
          <span className='spot' style={{ left: playPercent * 100 + '%', }}></span>
        </div>

        <i className='iconfont iconxiazai'></i>
        <i className='iconfont iconkaiguanguan'></i>
        <i className='iconfont iconmulu'></i>
      </div>

      <MusicList></MusicList>
    </div>

  )
}

export default TopNav
