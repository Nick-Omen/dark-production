import React from 'react'
import HomeView from './Home'
import TeamView from './Team'
import PortfolioView from './Portfolio'
import AboutView from './About'
import NotFound from './NotFound'
import CoreLayout from '../layout'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

export const AppRouter = () => (
    <Router history={browserHistory}>
        <Route path='/' component={CoreLayout}>
            <IndexRoute component={HomeView}/>
            <Route path='/team' component={TeamView}/>
            <Route path='/portfolio' component={PortfolioView}/>
            <Route path='/about' component={AboutView}/>
            <Route path='*' component={NotFound}/>
        </Route>
    </Router>
)

export default AppRouter
