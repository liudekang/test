/*
 * @Author: mikey.liudekang 
 * @Date: 2019-09-17 20:56:20 
 * @Last Modified by: mikey.liudekang
 * @Last Modified time: 2019-09-17 21:47:19
 */
import Home from '../pages/home';
import NoFont404Page from '../pages/NoFont404Page';
import Page1 from '../pages/p1/index';
import Page2 from '../pages/p2';

export default {
    routes: [
        {
            path: '/',
            component: Home,
            exact:true ,
            children: [
                {
                    path: '/index/p1',
                    component: Page1,
                },
                {
                    path: '/index/p2',
                    component: Page2,
                },
            ]
        },
        {
            path: '/p2',
            component: Page2,
        },
        {
            path: '/404',
            component: NoFont404Page,
        },
    ]
}