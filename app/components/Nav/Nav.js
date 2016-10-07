import React, {Component} from 'react'
import {IndexLink, Link} from 'react-router'

export class Menu extends Component {

    render() {
        return (
            <nav className="navigation">
                <IndexLink className="navigation__link" to='/' activeClassName='is-active'>
                    {'Home'}
                </IndexLink>
                <Link className="navigation__link" to='/team' activeClassName='is-active'>
                    {'Team'}
                </Link>
                <Link className="navigation__link" to='/portfolio' activeClassName='is-active'>
                    {'Portfolio'}
                </Link>
                <Link className="navigation__link" to='/about' activeClassName='is-active'>
                    {'About'}
                </Link>
            </nav>
        )
    }
}

export default Menu
