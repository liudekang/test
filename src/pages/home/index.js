/*
 * @Author: mikey.liudekang
 * @Date: 2019-09-17 20:58:00
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2019-11-24 20:01:12
 */
import React from 'react'
// import RouterView from '../../router/RouterView';

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  asdasd = () => ('123')

  render = () => {
    const aa = '123'
    return (
      <div className='App' >
        <h5>当前首页</h5>
        {aa}
      </div>
    )
  }
}
