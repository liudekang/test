/*
 * @Author: mikey.liudekang 
 * @Date: 2019-09-17 20:58:00 
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2019-11-24 18:13:13
 */
import React from 'react';

import './index.css'

export default class Home extends React.Component {
    constructor(props) {
        console.log(404, props)
        super(props);
        this.state={
            times:5  
        }
    }


    render = () => {
        const {times}=this.state
        return (
            <div className="page-404">
                <h3>您查找的页面不存在，即将跳转到首页！</h3>
                <div>倒计时 <span>{times}</span> 秒</div>
    </div>
        );
    }
} 
