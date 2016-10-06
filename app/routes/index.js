import React from 'react'
import Home from './Home'
import NotFound from './NotFound'
import CoreLayout from '../layout'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

export const AppRouter = () => (
    <Router history={browserHistory}>
        <Route path='/' component={CoreLayout}>
            <IndexRoute component={Home} />
            <Route path='*' component={NotFound} />
        </Route>
    </Router>
)

export default AppRouter
