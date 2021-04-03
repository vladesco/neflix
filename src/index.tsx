import React from 'react'
import ReactDOM from 'react-dom'
import jss from 'jss'
import plugin from 'jss-plugin-extend'
import { Provider } from 'react-redux'
import { App } from './app'
import { store } from './store'

import './global.styles.scss'

jss.use(plugin())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)
