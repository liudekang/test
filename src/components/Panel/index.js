/*
 * @Author: mikey.liudekang
 * @Date: 2019-09-17 20:58:00
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2019-11-24 20:01:12
 */
import React, { useEffect, useState, useMemo } from 'react'
import PropTypes from 'prop-types';
import { Breadcrumb, Dropdown, Button } from 'antd'
import routeConfig from 'Src/router/routeConfig'

import './index.less';

const Panel = (props) => {
  // console.log(1333, props, window, routeConfig)
  const { children, PanelTopLeftEle, className, panelConfigs } = props;
  const [currentPageObj, set_currentPageObj] = useState({})
  useEffect(() => {
    const pathname = window.location.pathname;
    const curArr = routeConfig.routes.filter(item => item.path === pathname);
    if (curArr.length) {
      set_currentPageObj(curArr[0])
    }
    // const current = window.Bmob ? window.Bmob.User.current() : null;
    // if (current && typeof current === 'object') {
    //   window.user = current
    //   set_user(current)
    //   set_isLogin(true)
    // }
    // console.log('user===', current)
  }, [set_currentPageObj])

  const loginOutFn = () => {
    // window.Bmob && window.Bmob.User.logout();
    // set_user({})
    // set_isLogin(false)
    // window.user = null
  }

  const renderBreadcrumb = useMemo(() => {
    if (Array.isArray(panelConfigs) && panelConfigs.length) {
      return (
        <div className='panel-Breadcrumb-wrap'>
          <Breadcrumb>
            {
              panelConfigs.map(item => (
                <Breadcrumb.Item key={item.name}>{
                  item.path ? <a href={item.path}>{item.name}</a> : item.name
                }
                </Breadcrumb.Item>
              ))
            }
          </Breadcrumb>
        </div>
      )
    } else {
      return null
    }
  }, [panelConfigs])

  return (
    <div className={'panel_wrapper ' + className}>
      <div className='panel_top'>
        {renderBreadcrumb}
        {PanelTopLeftEle}
      </div>
      <div className='panel_main'>
        {
          children
        }
      </div>
    </div>

  )
}
Panel.propTypes = {
  children: PropTypes.any,
  PanelTopLeftEle: PropTypes.element,
  panelConfigs: PropTypes.array,
  // itemClassName: PropTypes.string,
  // itemRule: PropTypes.array,

  className: PropTypes.string,
  // placeholder: PropTypes.string,
  // BraftEditorCallBackFn: PropTypes.func,
}
Panel.defaultProps = {
  // itemKey: 'remark',
  // children: '',
  // PanelTopLeftEle: '',
  className: '',
};
export default Panel
