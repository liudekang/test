/*
 * @Author: mikey.liudekang
 * @Date: 2019-09-17 20:58:08
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2019-11-24 19:46:18
 */
import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import RouterView from './router/RouterView'
import routeConfig from './router/routeConfig'
import TopNav from './components/TopNav'
import classnames from 'classnames'

import styles from './App.css'
// console.log(111, className)

function App() {
  return (
    <Router>
      <div className={classnames({
        [styles['reactwrapper']]: true,
        [styles.ee]: false,
      })}>

        <TopNav></TopNav>
        <div className={styles.pageWrapper}>
          <RouterView routes={routeConfig.routes} />
        </div>

      </div>
    </Router>
  )
}

export default App
