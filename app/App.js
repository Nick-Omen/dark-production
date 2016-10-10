import React, {Component} from 'react'
import AppRouter from './routes'
import classnames from 'classnames'
import './App.scss'

export class App extends Component {
    constructor() {
        super();
        this.state = {
            pageLoadedClass: 'loading',
        };
    }

    componentDidMount() {
        this.setState({
            pageLoadedClass: 'loaded'
        })
    }

    render() {
        return (
            <div style={{opacity: 0}} className={classnames('app', this.state.pageLoadedClass)}>
                <AppRouter/>
            </div>
        )
    }
}

export default App
