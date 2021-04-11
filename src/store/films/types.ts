export type FilmModel = {
    id: number
    title: string
    tagline: string
    vote_average: number
    vote_count: number
    release_date: string
    poster_path: string
    overview: string
    budget: number
    revenue: number
    genres: string[]
    runtime: number
}

export type CreateFilmBody = {
    title: string
    release_date: string
    poster_path: string
    overview: string
    genres: string[]
    runtime: number
}

export enum Genres {
    ALL = 'All',
    DOCUMENTARY = 'Documentary',
    COMEDY = 'Comedy',
    HORROR = 'Horror',
    CRIME = 'Crime',
}

export enum Categories {
    GENRE = 'Genre',
    RAITING = 'Raiting',
    RELEASE_DATE = 'Release Date',
}

export enum FilmsActions {
    SET_FILMS = 'Set Films',
    SELECT_FILM = 'Select Film',
    INSERT_FILM = 'Insert Film',
    REMOVE_FILM = 'Remove Film',
    REPLACE_FILM = 'Replace FIlm',
    SET_GENRE = 'Set Genre',
    SET_SORTING_CATEGORY = 'Set Sorting Category',
}

export type FilmsState = {
    films: FilmModel[]
    selectedFilmId: number
    selectedGenre: Genres
    sortingCategory: Categories
}

export type FilmsAction<T = any> = {
    type: FilmsActions
    payload?: T
}
