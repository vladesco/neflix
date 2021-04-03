import {
    insertFilm,
    removeFilm,
    setFilms,
    replaceFilm,
} from './action-creators'
import { filmsUrl } from './const'
import { CreateFilmBody, FilmModel } from './types'

export function loadFilms() {
    return function (dispatch: (action: ReturnType<typeof setFilms>) => void) {
        return fetch(filmsUrl)
            .then((res) => res.json())
            .then((filmsData: { data: FilmModel[] }) =>
                dispatch(setFilms(filmsData.data))
            )
    }
}

export function deleteFilm(filmId: number) {
    return function (
        dispatch: (action: ReturnType<typeof removeFilm>) => void
    ) {
        return fetch(`${filmsUrl}/${filmId}`, { method: 'DELETE' }).then(() =>
            dispatch(removeFilm(filmId))
        )
    }
}

export function updateFilm(filmModel: FilmModel) {
    return function (
        dispatch: (action: ReturnType<typeof replaceFilm>) => void
    ) {
        console.log(filmModel)
        return fetch(filmsUrl, {
            method: 'PUT',
            body: JSON.stringify(filmModel),
        }).then(() => dispatch(replaceFilm(filmModel)))
    }
}

export function addFilm(filmModelWithoutId: CreateFilmBody) {
    return function (
        dispatch: (action: ReturnType<typeof insertFilm>) => void
    ) {
        return fetch(filmsUrl, {
            method: 'POST',
            body: JSON.stringify(filmModelWithoutId),
        })
            .then((res) => res.json())
            .then((filmModel: FilmModel) => dispatch(insertFilm(filmModel)))
    }
}
