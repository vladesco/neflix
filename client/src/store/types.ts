import { Store } from 'redux'
import { FilmsAction, FilmsState } from './films'

export type State = {
    filmsSection: FilmsState
}

export type StateAction = FilmsAction
export type ApplicationStore = Store<State, StateAction>
