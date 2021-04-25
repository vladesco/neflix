import { FilmsAction, FilmsState } from './films'

export type State = {
    filmsSection: FilmsState
}

export type StateAction = FilmsAction
