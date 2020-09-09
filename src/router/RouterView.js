/*
 * @Author: mikey.liudekang
 * @Date: 2019-09-17 20:58:04
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2019-11-24 19:46:22
 */
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
// 引入
import PropTypes from 'prop-types'
//  //如果没有传递该属性时的默认值
//  static defaultProps = {
//     name: 'stranger'
//   }
//   //如果传递该属性，该属性值必须为字符串
//   static propTypes={
//     name:PropTypes.string
//   }
const RouterView = (props) =>
// console.log(11, props, window.location)
  <Switch>
    {
      props.routes.map((item, index) => (
        <Route
          key={index}
          path={item.path}
          exact={item.exact}
          render={(location) => {
          // 传递路由信息
            if (item.redirect) {
              return <Redirect to={item.redirect}></Redirect>
            } else if (item.children) {
            // console.log(item,item.children)
              return <item.component {...location} routes={item.children} />
            } else {
              return <item.component {...location} />
            }
          }}
        >
        </Route>
      )
      )
    }
    {/* <Redirect to={
      {
        pathname: '404',
        state: {
          fromHref: window.location.href,
          fromPathname: window.location.pathname,
        },
      }
    }
    /> */}
  </Switch>

RouterView.propTypes = {
  // 引入prop-types后，使用方式和之前相同
  routes: PropTypes.array,
}
export default RouterView
