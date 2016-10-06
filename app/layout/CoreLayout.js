import React from 'react'
import '../styles/core.scss'

export class CoreLayout extends React.Component {
    static propTypes = {
        children: React.PropTypes.element.isRequired
    }
    render() {
        const {children} = this.props
        return (
            <div className="page-wrapper">
                {children}
            </div>
        )
    }
}

export default CoreLayout
