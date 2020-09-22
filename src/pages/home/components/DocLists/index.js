/*
 * @Author: mikey.liudekang
 * @Date: 2019-09-17 20:58:00
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2020-07-26 20:37:33
 */
import React, { useEffect, useState, useMemo } from 'react';

import { Button, Calendar } from 'antd';
import { TimeDiffFromNowArr } from 'Src/utils/index';

import styles from './index.css';
 

const renderDescript = (txt) => {
  return (txt || '').replace(/<[^(><).]*>/g, '')
}

const rendertimeDiss = (tm) => {
  const cz = TimeDiffFromNowArr(tm, Date.now(), 'max')
  return cz || '-';
}

const Home = (props) => {

  const [reqLoading, set_reqLoading] = useState(false);

  const { dataArr } = props;

  useEffect(() => {

  }, [])




  return (
    <div className={styles.doc_list_wrap} >
      <ul className={styles.lists_ul}>
        {
          Array.isArray(dataArr) && dataArr.length ?
            dataArr.map(item => (
              <li className={styles.li_items} key={item.title}>
                <h5 className={styles.titles}>{item.title}</h5>
                <div className={styles.contents}>
                  {
                    renderDescript(item.textValue)
                  }
                </div>
                <div className={styles.doc_info}>
                  <span>{item.username}</span>-
                  <span>{rendertimeDiss(item.createdAt)}</span>
                  <span>{item.tags}</span>
                </div>
              </li>
            )) : null
        }
      </ul>
    </div>
  )
}

export default Home