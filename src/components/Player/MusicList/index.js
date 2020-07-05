/*
 * @Author: mikey.liudekang
 * @Date: 2019-09-17 20:58:00
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2020-07-05 22:20:35
 */
import React, { useEffect, useState, useRef } from 'react'
import { Menu, Dropdown, Button, Progress } from 'antd'
import service from 'Src/utils/request';
import { fromJS, Map, List } from 'immutable';

import './index.less';

const perimeter = Math.PI * 2 * 19;
const time_interval = 1;

const TopNav = () => {
  const [Listloading, set_Listloading] = useState(false)
  const [MusicDataList, set_MusicDataList] = useState(List([]))
  const [MusicTotal, set_MusicTotal] = useState(0)

  useEffect(() => {
    service({
      url: '/kugouApi/v3/rank/newsong',
      method: 'get',
      params: {
        version: '9108',
        plat: 0,
        with_cover: 1,
        pagesize: 30,
        page: 2,
        type: 3,
        area_code: 1,

        // with_res_tag: 1,
      },
    })
      .then(res => {
        const musicData = res?.data?.info;
        const musicTotal = res?.data?.total;
        if (Array.isArray(musicData) && musicTotal) {
          set_MusicDataList(fromJS(musicData))
          set_MusicTotal(musicTotal)
        }
        console.log(11, res)
      })
      .catch(err => {
        console.warn(222, err)
      })
  }, [set_MusicDataList])

  const selectMusicFn = () => {
    service({
      url: '/trackercdnbjApi/i/v2',
      method: 'get',
      params: {
        album_audio_id: 9108,
        behavior: 'play',
        cmd: 25,
        album_id: 6960309,
        hash: 'b5a2d566c9de70422f5e5e7203054219',
        userid: 0,
        pid: 2,
        version: 9108,
        area_code: 1,
        appid: 1005,
        key: '407732fc325852538ca836581fe4e370',
        pidversion: 3001,
        // with_res_tag: 1,
      },
    })
      .then(res => {
        // const musicData = res?.data?.info;
        // const musicTotal = res?.data?.total;
        // if (Array.isArray(musicData) && musicTotal) {
        //   set_MusicDataList(fromJS(musicData))
        //   set_MusicTotal(musicTotal)
        // }
        console.log(333, res)
      })
      .catch(err => {
        console.warn(444, err)
      })
  }
  return (
    <div className='music_list_wrapper'>
      <div className='music_list_title'>日韩新歌({MusicTotal})</div>

      <ul className='list_main'>
        {
          MusicDataList.size && MusicDataList.map((item, index) => (
            <li
              key={item.get('filename')}
              className='music_item'
              onClick={selectMusicFn}
            >
              <span className='num_index'>{index + 1}</span>
              <span className='mu_title'>{item.get('filename')}</span>
            </li>
          ))
        }

      </ul>
    </div>

  )
}

export default TopNav
