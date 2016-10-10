import React, {Component} from 'react'
import {IndexLink, Link} from 'react-router'
import './Nav.scss'

export class Menu extends Component {
    render() {
        return (
            <nav className="nav">
                <IndexLink className="nav__link" to='/' activeClassName='is-active'>
                    {'Home'}
                </IndexLink>
                <Link className="nav__link" to='/team' activeClassName='is-active'>
                    {'Team'}
                </Link>
                <Link className="nav__link" to='/portfolio' activeClassName='is-active'>
                    {'Portfolio'}
                </Link>
                <Link className="nav__link" to='/about' activeClassName='is-active'>
                    {'About'}
                </Link>
            </nav>
        )
    }
}

export default Menu
