/*
 * @Author: mikey.liudekang
 * @Date: 2019-09-17 20:56:20
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2019-11-24 19:57:00
 */
import Home from '../pages/home/index'
import NoFont404Page from '../pages/NoFont404Page'
import testAntv from '../pages/testAntv'
import testHook from '../pages/testHook'
import mangeImgs from '../pages/mangeImgs'

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
      component: testAntv,
    },
    {
      path: '/test/hook',
      name: '测试hook页',
      component: testHook,
    },
    {
      path: '/mangeImgs',
      name: '管理图片',
      component: mangeImgs,
    },
    {
      path: '/user/404',
      name: '404页面',
      component: NoFont404Page,
    },
  ],
}
