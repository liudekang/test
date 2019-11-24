/*
 * @Author: mikey.liudekang
 * @Date: 2019-09-17 20:58:00
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2019-11-24 19:42:36
 */
import React from 'react'
import PropTypes from 'prop-types'
export default class P1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

    render = () => {
      return (
        <div className='App'>
                页面11111111111111111
        </div>
      )
    }
}
P1.propTypes = {
  // 引入prop-types后，使用方式和之前相同
  routes: PropTypes.array,
}

