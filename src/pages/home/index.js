/*
 * @Author: mikey.liudekang 
 * @Date: 2019-09-17 20:58:00 
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2019-09-17 21:02:22
 */
import React from 'react';
import RouterView from '../../router/RouterView'; 

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        console.log(1666,this.props.routes)
        return (
            <div className="App">
                当前首页
                <div>
                <RouterView routes={this.props.routes} />
                </div>
    </div>
        );
    }
} 
