import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'

import Home from '@/components/Home/Home'
import Detail from '@/components/Detail/Detail'

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
            </ul>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='/detail' component={Detail}></Route>
            </Switch>
        </div>
    </Router>
)

export default getRouter
