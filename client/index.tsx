import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import jss from 'jss'
import plugin from 'jss-plugin-extend'

import { App } from './src/app'
import { createStore } from './src/store'
jss.use(plugin())

const inititialState = window.STATE
delete window.STATE

ReactDOM.hydrate(
    <App store={createStore(inititialState)} Router={BrowserRouter} />,
    document.querySelector('#root')
)
