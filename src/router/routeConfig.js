/*
 * @Author: mikey.liudekang
 * @Date: 2019-09-17 20:56:20
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2019-11-24 19:57:00
 */

import loadable from './loadable'

// import Home from 'Page/home/index'
// import NoFont404Page from 'Page/NoFont404Page'
// import testAntv from 'Page/testAntv'
// import testHook from 'Page/testHook'
// import mangeImgs from 'Page/mangeImgs'
// import draftBlog from 'Page/draftBlog'
// import login from 'Page/login'
// import user from 'Page/user'
// import setting from 'Page/setting'
// import userList from 'Page/userList'
// import loadingPage from 'Page/loadingPage'
// import administrators from 'Page/administrators'

// const wwww = loadable(() => import(/* webpackChunkName: "Page-wwww" */'Page/wwww'))

const home = loadable(() => import(/* webpackChunkName: "Page-home" */'Page/home'))
const NoFont404Page = loadable(() => import(/* webpackChunkName: "Page-NoFont404Page" */'Page/NoFont404Page'))
const testAntv = loadable(() => import(/* webpackChunkName: "Page-testAntv" */'Page/testAntv'))
const testHook = loadable(() => import(/* webpackChunkName: "Page-testHook" */'Page/testHook'))
const mangeImgs = loadable(() => import(/* webpackChunkName: "Page-mangeImgs" */'Page/mangeImgs'))
const draftBlog = loadable(() => import(/* webpackChunkName: "Page-draftBlog" */'Page/draftBlog'))
const login = loadable(() => import(/* webpackChunkName: "Page-login" */'Page/login'))
const user = loadable(() => import(/* webpackChunkName: "Page-user" */'Page/user'))
const setting = loadable(() => import(/* webpackChunkName: "Page-setting" */'Page/setting'))
const userList = loadable(() => import(/* webpackChunkName: "Page-userList" */'Page/userList'))
const loadingPage = loadable(() => import(/* webpackChunkName: "Page-loadingPage" */'Page/loadingPage'))
const administrators = loadable(() => import(/* webpackChunkName: "Page-administrators" */'Page/administrators'))
export default {
  routes: [
    {
      path: '/',
      name: '首页',
      component: home,
      exact: true,
      show: true,
    },
    {
      path: '/test/antv',
      name: '测试antv页',
      component: testAntv,
    },
    {
      path: '/loading',
      name: 'loading页面',
      component: loadingPage,
    },
    {
      path: '/test/hook',
      name: '测试hook页',
      component: testHook,
    },
    {
      path: '/draftBlog',
      name: '添加文章',
      component: draftBlog,
      show: true,
    },
    {
      path: '/mangeImgs',
      name: '管理图片',
      show: true,
      component: mangeImgs,
    },
    {
      path: '/user/404',
      name: '404页面',
      component: NoFont404Page,
    },
    {
      path: '/login',
      name: '登录',
      component: login,

    },
    {
      path: '/user',
      name: '个人中心',
      component: user,
    },
    {
      path: '/setting',
      name: '设置',
      component: setting,

      children: [
        {
          path: '/setting/administrators',
          name: '管理员列表',
          component: administrators,
        },
        {
          path: '/setting/userList',
          name: '用户列表',
          component: userList,
        },
      ],
    },

  ],
}
