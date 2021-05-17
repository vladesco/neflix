import { createStore as createReduxStore, applyMiddleware, Store } from 'redux'
import thunk from 'redux-thunk'
import { reducer } from './reducer'
import { State } from './types'

export const createStore = (state?: State): Store =>
    createReduxStore(reducer, state, applyMiddleware(thunk))
