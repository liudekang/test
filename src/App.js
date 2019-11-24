/*
 * @Author: mikey.liudekang
 * @Date: 2019-09-17 20:58:08
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2019-11-24 19:46:18
 */
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import RouterView from './router/RouterView'
import routeConfig from './router/routeConfig'

function App() {
  return (
    <div className='App'>
      <Router>
        <RouterView routes={routeConfig.routes} />
      </Router>
    </div>
  )
}

export default App
