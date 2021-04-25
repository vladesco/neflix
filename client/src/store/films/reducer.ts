import { initialState } from './const'
import {
    selectFilm,
    setGenre,
    setFilms,
    setSortingCategory,
    removeFilm,
    insertFilm,
    replaceFilm,
} from './action-creators'
import { FilmsAction, FilmsActions, FilmsState } from './types'

export const filmsReducer = (
    state: FilmsState = initialState,
    action: FilmsAction
): FilmsState => {
    switch (action.type) {
        case FilmsActions.SELECT_FILM:
            const {
                payload: { selectedFilmId },
            } = action as ReturnType<typeof selectFilm>

            return { ...state, selectedFilmId }

        case FilmsActions.REMOVE_FILM:
            const {
                payload: { filmId },
            } = action as ReturnType<typeof removeFilm>
            const filmsWithoutDeleteFilm = state.films.filter(
                (film) => film.id !== filmId
            )

            return { ...state, films: filmsWithoutDeleteFilm }

        case FilmsActions.INSERT_FILM:
            const {
                payload: { filmModel },
            } = action as ReturnType<typeof insertFilm>

            const filmsWithNewFilm = [...state.films, filmModel]

            return { ...state, films: filmsWithNewFilm }

        case FilmsActions.REPLACE_FILM:
            const {
                payload: { newFilmModel },
            } = action as ReturnType<typeof replaceFilm>

            const filmsWithoutUpdatedFilm = state.films.filter(
                (film) => film.id !== newFilmModel.id
            )
            const filmsWithUpdatedFilm = [
                ...filmsWithoutUpdatedFilm,
                newFilmModel,
            ]

            return { ...state, films: filmsWithUpdatedFilm }

        case FilmsActions.SET_FILMS:
            const {
                payload: { films },
            } = action as ReturnType<typeof setFilms>

            return { ...state, films }

        case FilmsActions.SET_GENRE:
            const {
                payload: { selectedGenre },
            } = action as ReturnType<typeof setGenre>

            return { ...state, selectedGenre }

        case FilmsActions.SET_SORTING_CATEGORY:
            const {
                payload: { sortingCategory },
            } = action as ReturnType<typeof setSortingCategory>

            return { ...state, sortingCategory }

        default:
            return state
    }
}
