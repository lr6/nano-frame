import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'

import Bundle from "@/router/Bundle"

import Home from 'bundle-loader?lazy&name=home!@/components/Home/Home'
import Detail from 'bundle-loader?lazy&name=detail!@/components/Detail/Detail'
import Counter from 'bundle-loader?lazy&name=counter!@/components/Counter/Counter'
import UserInfo from "bundle-loader?lazy&name=userInfo!@/components/UserInfo/UserInfo"

const Loading = function() {
    return <div>Loading...</div>
}

const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading />
        }
    </Bundle>
)

const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to='/'>首页</Link>
                </li>
                <li>
                    <Link to='/detail'>详情</Link>
                </li>
                <li>
                    <Link to='/counter'>计数</Link>
                </li>
                <li>
                    <Link to='/user'>用户信息</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path='/' component={createComponent( Home )}/>
                <Route path='/detail' component={createComponent( Detail )}/>
                <Route path='/counter' component={createComponent( Counter )}/>
                <Route path='/user' component={createComponent( UserInfo )}/>
            </Switch>
        </div>
    </Router>
)

export default getRouter
