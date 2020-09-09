/*
 * @Author: mikey.liudekang
 * @Date: 2019-09-17 20:58:00
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2020-07-26 21:01:48
 */
import React, { useEffect, useState } from 'react'
import { Menu, Dropdown, Button, Spin, Tag } from 'antd'
import PropTypes from 'prop-types'
import { parse, stringify } from 'qs'
import { Map, fromJS } from 'immutable'
import ReadOnlyMarkdown from 'Src/components/ReadOnlyMarkdown';
import styles from './index.css';
import './index.less';
const TopNav = (props) => {
  const { location, } = props
  const [reqloading, set_reqloading] = useState(false)
  const [detailData, set_detailData] = useState(Map({}));
  useEffect(() => {
    const sh = location?.search;
    if (typeof sh === 'string') {
      const params = parse(location.search.slice(1));
      if (params.objectId) {
        getBlogListFn(params.objectId)
      }
    }
    console.log(1777, props)
    // const current = window.Bmob ? window.Bmob.User.current() : null;
    // if (current && typeof current === 'object') {
    //   window.user = current
    //   set_user(current)
    //   set_isLogin(true)
    // }
    // console.log('user===', current)
  }, [])

  const getBlogListFn = (ids) => {
    set_reqloading(true)
    const query = window.Bmob.Query('blogs');
    query.get(ids).then(res => {
      console.log(33, res)
      set_detailData(fromJS(res));
      setTimeout(() => {
        set_reqloading(false)
      }, 200)
    });
  }

  return (
    <div className={styles.nav_Topper_inner}>

      <Spin spinning={reqloading}>
        {
          detailData.size
            ? <div>
              <h5>{detailData.get('title')}</h5>
              <div>
                <span>{detailData.get('type')}</span>
                <Tag>{detailData.get('tags')}</Tag>
                <span>{detailData.get('createdAt')}</span>
              </div>
              <ReadOnlyMarkdown
                data={detailData.get('textValue')}
                className={styles.read_only_wrapper}
              />
            </div>
            : 'nullllllll'
        }

      </Spin>

    </div>

  )
}
TopNav.propTypes = {
  // 引入prop-types后，使用方式和之前相同
  height: PropTypes.number,
}
TopNav.defaultProps = {
  height: 500,
}
export default TopNav
