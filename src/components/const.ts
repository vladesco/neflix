import { Categories, Genres } from '../store'

export const GENRES: { text: string; value: Genres }[] = [
    { text: Genres.ALL, value: Genres.ALL },
    { text: Genres.COMEDY, value: Genres.COMEDY },
    { text: Genres.CRIME, value: Genres.CRIME },
    { text: Genres.DOCUMENTARY, value: Genres.DOCUMENTARY },
    { text: Genres.HORROR, value: Genres.HORROR },
]

export const SORTING_CATEGORIES: { text: string; value: Categories }[] = [
    { text: Categories.GENRE, value: Categories.GENRE },
    { text: Categories.RAITING, value: Categories.RAITING },
    { text: Categories.RELEASE_DATE, value: Categories.RELEASE_DATE },
]
