/*
 * @Author: mikey.liudekang 
 * @Date: 2019-09-17 20:58:04 
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2019-11-24 18:01:33
 */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

export default (props) => {
    // console.log(11, props, window.location)
    return <Switch>
        {
            props.routes.map((item, index) => {
                return <Route
                    key={index}
                    path={item.path}
                    exact={item.exact}
                    render={(location) => {
                        //传递路由信息
                        if (item.redirect) {
                            return <Redirect to={item.redirect}></Redirect>
                        } else if (item.children) {
                            // console.log(item,item.children)   
                            return <item.component  {...location} routes={item.children} />
                        } else {
                            return <item.component  {...location} />
                        }
                    }}
                >
                </Route>
            })
        }
        <Redirect to={
            {
                pathname: '404',
                state: {
                    fromHref:window.location.href,
                    fromPathname:window.location.pathname,
                }
            }
        } /> 
    </Switch>
}