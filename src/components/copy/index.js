/*
 * @Author: mikey.liudekang
 * @Date: 2019-09-17 20:58:00
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2019-11-24 20:01:12
 */
import React from 'react'

import { Button } from 'antd'
import Graphin, { Utils } from '@antv/graphin';
import { Toolbar } from '@antv/graphin-components';

import '@antv/graphin/dist/index.css'; // Graphin CSS
import '@antv/graphin-components/dist/index.css'; // Graphin 组件 CSS
// import RouterView from '../../router/RouterView';

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  asdasd = () => ('123')

  render = () => {
    const aa = '123'
    const data = Utils.mock(10).circle().graphin();
    console.log(2888, Toolbar)
    return (
      <div className='App' >
        <h5>当前首页</h5>
        <Button>annu</Button> {aa}

        <div className='App'>
          <Graphin data={data} layout={{ name: 'concentric', }}>
            {/* <Toolbar /> */}
          </Graphin>
        </div>
      </div>
    )
  }
}
