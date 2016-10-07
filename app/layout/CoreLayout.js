import React from 'react'
import Nav from '../components/Nav'
import '../styles/core.scss'

export class CoreLayout extends React.Component {
    static propTypes = {
        children: React.PropTypes.element.isRequired
    }
    render() {
        const {children} = this.props
        return (
            <div className="page-wrapper">
                <header className="page-header">
                    <Nav />
                </header>
                <div className="page-body">{children}</div>
            </div>
        )
    }
}

export default CoreLayout
