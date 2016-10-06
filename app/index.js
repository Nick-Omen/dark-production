import React from 'react'
import ReactDOM from 'react-dom'
import CoreLayout from './layout'
import AppRouter from './routes'

const __DEV__ = true

const MOUNT_NODE = document.getElementById('app')

const App = () => (
    <CoreLayout>
        <AppRouter />
    </CoreLayout>
)

let render = () => {

    ReactDOM.render(
        <App />,
        MOUNT_NODE
    )
}

if (__DEV__) {

    if (window.devToolsExtension) {
        window.devToolsExtension.open()
    }

    if (module.hot) {
        // Development render functions
        const renderApp = render
        const renderError = (error) => {
            const RedBox = require('redbox-react').default

            ReactDOM.render(<RedBox error={error}/>, MOUNT_NODE)
        }

        // Wrap render in try/catch
        render = () => {
            try {
                renderApp()
            } catch (error) {
                renderError(error)
            }
        }

        // Setup hot module replacement
        // module.hot.accept('./routes/index', () =>
        //     setImmediate(() => {
        //         ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        //         render()
        //     })
        // )
    }
}

render()
