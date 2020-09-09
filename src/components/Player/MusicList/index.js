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
import classnames from 'classnames';

import './index.less';

const perimeter = Math.PI * 2 * 19;
const time_interval = 1;

const TopNav = (props) => {
  const [curId, set_curId] = useState()
  const [MusicDataList, set_MusicDataList] = useState(List([]))
  const [MusicTotal, set_MusicTotal] = useState(0)

  const { callBackCurrentMusic, } = props;

  useEffect(() => {

  }, [])

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

  const selectMusicFn = (val) => {
    set_curId(val.get('audio_id'))
    callBackCurrentMusic && callBackCurrentMusic(val)
  }

  return (
    <div className='music_list_wrapper'>
      <div className='music_list_title'>日韩新歌({MusicTotal})</div>

      <ul className='list_main'>
        {
          MusicDataList.size && MusicDataList.map((item, index) => (
            <li
              key={item.get('filename')}
              className={classnames({
                'music_item': true,
                'active_musice_item': item.get('audio_id') === curId,
              })}
              onClick={() => selectMusicFn(item)}
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
