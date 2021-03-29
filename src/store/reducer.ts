import { combineReducers } from 'redux'
import { State } from './types'
import { filmsReducer } from './films'

export const reducer = combineReducers<State>({
    filmsSection: filmsReducer,
})
