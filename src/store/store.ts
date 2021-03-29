import { createStore, applyMiddleware, Store } from 'redux'
import thunk from 'redux-thunk'
import { reducer } from './reducer'
import { State, StateAction } from './types'

export const store: Store<State, StateAction> = createStore(
    reducer,
    applyMiddleware(thunk)
)
