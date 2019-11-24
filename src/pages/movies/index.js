/*
 * @Author: mikey.liudekang
 * @Date: 2019-09-17 20:58:00
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2019-11-24 19:46:36
 */
import React from 'react'
import RouterView from '../../router/RouterView'
import PropTypes from 'prop-types'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

    render = () =>
    // console.log(1666, this.props.routes)
      (
        <div className='2123'>
                当前首页
          <div>
            <RouterView routes={this.props.routes} />
          </div>
        </div>
      )
}
Home.propTypes = {
  // 引入prop-types后，使用方式和之前相同
  routes: PropTypes.object,
}
