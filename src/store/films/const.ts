import { Categories, FilmsState, Genres } from './types'

export const initialState: FilmsState = {
    films: [],
    selectedFilmId: null,
    selectedGenre: Genres.ALL,
    sortingCategory: Categories.RAITING,
}

export const filmsUrl = 'http://localhost:4000/movies'
