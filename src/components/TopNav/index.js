/*
 * @Author: mikey.liudekang
 * @Date: 2019-09-17 20:58:00
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2019-11-24 20:01:12
 */
import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Button } from 'antd'
import routeConfig from '../../router/routeConfig'
import styles from './index.css';

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  asdasd = () => ('123')

  render = () => {
    return (
      <nav className={styles.navTopperWrap}>
        <ul className={styles.navList}>
          {
            routeConfig.routes.map(item => (
              <li className={styles.navItem} key={item.path}><Link to={item.path}>{item.name}</Link></li>
            ))
          }
        </ul>
      </nav>
    )
  }
}
