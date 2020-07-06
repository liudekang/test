/*
 * @Author: mikey.liudekang
 * @Date: 2019-09-17 20:58:00
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2020-07-06 22:38:02
 */
import React, { useEffect, useState, useRef, useMemo } from 'react'
import { Menu, Dropdown, Button, Progress } from 'antd'
import { fromJS, Map, List } from 'immutable'
import service from 'Src/utils/request';

import MusicList from './MusicList';

import './index.less';

const perimeter = Math.PI * 2 * 19;
const time_interval = 1;

const formetTime = (val) => {
  if (!val || isNaN(val)) {
    return '00:00'
  }
  const sec = ('00' + Math.floor(val % 60)).slice(-2);
  const min = ('00' + Math.floor(val / 60)).slice(-2)

  return `${min}:${sec}`
}

const TopNav = () => {
  const [isLogin, set_isLogin] = useState(false)
  const [isPlay, set_isPlay] = useState(false)
  // const [playPercent, set_playPercent] = useState(0)

  const [currentMusic, set_currentMusic] = useState(Map({}))
  const [muTotalTime, set_muTotalTime] = useState(0)
  const [muCurTime, set_muCurTime] = useState(0)

  const couterRef2 = useRef();
  const audioEle = useRef();
  useEffect(() => {
    getRandomMusic()
    // return () => {
    //   console.log(3333, couterRef2.current)
    //   clearInterval(couterRef2.current)
    // }
  }, [])

  const changPlayPauseFn = () => {
    // let percent = 0;
    const muEle = audioEle.current;
    if (!muEle) {
      return console.warn('未找到audio标签');
    }
    const { duration, currentTime, } = muEle;
    console.log(4444, duration, currentTime, audioEle.current)
    muEle.play()

    if (isPlay) {
      muEle.pause()
      set_isPlay(false);
      clearInterval(couterRef2.current)
    } else {
      muEle.play()
      set_isPlay(true)
      set_muTotalTime(duration)

      couterRef2.current = setInterval(() => {
        console.log(4333, muEle.currentTime);
        set_muCurTime(muEle.currentTime)
        if (currentTime >= duration) {
          clearInterval(couterRef2.current)
        }
      }, 1000)
    }
  }

  const getRandomMusic = () => {
    service({
      url: '/wyyApi/api/rand.music',
      method: 'get',
      params: {
        sort: '热歌榜', // 99121191,
        format: 'json',
      },
    })
      .then(res => {
        console.log(3444, res)
        const muSrc = res?.data?.url;
        if (muSrc) {
          set_currentMusic(fromJS(res?.data))
        }
      })
      .catch(err => {
        console.warn(444, err)
      })
  }

  const changeCurrentMusicFn = () => {
    set_isPlay(false);
    clearInterval(couterRef2.current)
    set_muTotalTime(0)
    set_muCurTime(0)

    getRandomMusic()
  }

  const playPercent = useMemo(() => {
    console.log('name memo 触发', muTotalTime, muCurTime, muCurTime / muTotalTime)
    if (!muTotalTime || !muTotalTime) {
      return 0
    }
    return muCurTime / muTotalTime // 返回一个函数
  }, [muTotalTime, muCurTime])

  return (
    <div className='player_wrapper'>
      {/* <i className='iconfont iconyinyue'></i> */}
      <div className='player_main'>
        <div className='p_main_info p_main_left'>
          <dl className='music_info_item music_title'>
            <dt className='m_icon'><i className='iconfont iconyinyue'></i> </dt>
            <dd className='m_value'>{currentMusic.get('name')}</dd>
          </dl>
          <dl className='music_info_item music_user'>
            <dt className='m_icon'><i className='iconfont iconuser'></i> </dt>
            <dd className='m_value'>{currentMusic.get('artistsname')}</dd>
          </dl>
          <dl className='music_info_item music_folder'>
            <dt className='m_icon'><i className='iconfont iconwenjianjia'></i> </dt>
            <dd className='m_value'>{currentMusic.get('name')}</dd>
          </dl>

          <p className='m_controlsBtn'>
            <i className='iconfont iconxunhuan'></i>
            <i className='iconfont iconxiayishou1' onClick={changeCurrentMusicFn}></i>
          </p>
        </div>

        <div className='p_main_center'>
          <div className='music_img'>
            {/* <img src='/image.png' alt='' srcSet='' /> */}
            <img src={currentMusic.get('picurl')} alt='' srcSet='' />
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
            <dd className='m_value'>{formetTime(muCurTime)} / {formetTime(muTotalTime)}</dd>
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
            <i className='iconfont iconxiayishou' onClick={changeCurrentMusicFn}></i>
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
          <audio ref={audioEle} src={currentMusic.get('url')}> 您的浏览器不支持 audio 元素</audio>
        </div>

        <i className='iconfont iconxiazai'></i>
        <i className='iconfont iconkaiguanguan'></i>
        <i className='iconfont iconmulu'></i>
      </div>

      {/* <MusicList callBackCurrentMusic={callBackCurrentMusic}></MusicList> */}
    </div>

  )
}

export default TopNav
