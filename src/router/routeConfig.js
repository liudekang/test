/*
 * @Author: mikey.liudekang
 * @Date: 2019-09-17 20:56:20
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2019-11-24 19:57:00
 */
import Home from '../pages/home/index'
import NoFont404Page from '../pages/NoFont404Page'
import Page1 from '../pages/p1/index'
import Page2 from '../pages/p2'

export default {
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home,
      exact: true,
    },
    {
      path: '/test/antv',
      name: '测试antv页',
      component: Page1,
    },
    {
      path: '/test/hook',
      name: '测试hook页',
      component: Page2,
    },
    {
      path: '/user/404',
      name: '404页面',
      component: NoFont404Page,
    },
  ],
}
