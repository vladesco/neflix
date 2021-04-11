import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import jss from 'jss'
import plugin from 'jss-plugin-extend'

import { App } from './src/app'
import { store } from './src/store'
jss.use(plugin())

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.querySelector('#root')
)
