/*
 * @Author: mikey.liudekang 
 * @Date: 2019-09-17 20:58:04 
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2019-09-17 21:46:57
 */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

export default (props) => {
    return <Switch>
        {
            props.routes.map((item, index) => {
                return <Route
                    key={index}
                    path={item.path}
                    // exact={item.exact }
                    render={(location) => {
                        //传递路由信息
                        // if (item.redirect) {
                        //     return <Redirect to={item.redirect}></Redirect>
                        // } else 
                        if (item.children) {
                            console.log(item,item.children)   
                            return <item.component  {...location} routes={item.children} />
                        } else {
                            return <item.component  {...location} />
                        }
                    }}
                >
                </Route>
            })
        }
        <Redirect to='/404'></Redirect>
    </Switch>
}