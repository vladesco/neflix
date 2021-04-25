import {
    Categories,
    FilmModel,
    FilmsAction,
    FilmsActions,
    Genres,
} from './types'

export function selectFilm(
    selectedFilmId: number
): FilmsAction<{ selectedFilmId: number }> {
    return {
        type: FilmsActions.SELECT_FILM,
        payload: {
            selectedFilmId,
        },
    }
}

export function setFilms(
    films: FilmModel[]
): FilmsAction<{ films: FilmModel[] }> {
    return {
        type: FilmsActions.SET_FILMS,
        payload: {
            films,
        },
    }
}

export function removeFilm(filmId: number): FilmsAction<{ filmId: number }> {
    return {
        type: FilmsActions.REMOVE_FILM,
        payload: {
            filmId,
        },
    }
}

export function replaceFilm(
    newFilmModel: FilmModel
): FilmsAction<{ newFilmModel: FilmModel }> {
    return {
        type: FilmsActions.REPLACE_FILM,
        payload: {
            newFilmModel,
        },
    }
}

export function insertFilm(
    filmModel: FilmModel
): FilmsAction<{ filmModel: FilmModel }> {
    return {
        type: FilmsActions.INSERT_FILM,
        payload: {
            filmModel,
        },
    }
}

export function setGenre(
    selectedGenre: Genres
): FilmsAction<{ selectedGenre: Genres }> {
    return {
        type: FilmsActions.SET_GENRE,
        payload: {
            selectedGenre,
        },
    }
}

export function setSortingCategory(
    sortingCategory: Categories
): FilmsAction<{ sortingCategory: Categories }> {
    return {
        type: FilmsActions.SET_SORTING_CATEGORY,
        payload: {
            sortingCategory,
        },
    }
}
