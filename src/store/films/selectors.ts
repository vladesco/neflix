import { createSelector } from 'reselect'
import { Categories, FilmModel, FilmsState, Genres } from './types'
import { State } from '../types'

const filmsStateSelector = (state: State): FilmsState => state.filmsSection

export const filmsSelector = createSelector(
    filmsStateSelector,
    (filmsState: FilmsState) => filmsState.films
)

export const selectedFilmdId = createSelector(
    filmsStateSelector,
    (filmsState: FilmsState) => filmsState.selectedFilmId
)

export const sortingCategorySelector = createSelector(
    filmsStateSelector,
    (filmsState: FilmsState) => filmsState.sortingCategory
)

export const selectedGenrySelector = createSelector(
    filmsStateSelector,
    (filmsState: FilmsState) => filmsState.selectedGenre
)

export const selectedFilmSelector = createSelector(
    filmsSelector,
    selectedFilmdId,
    (films: FilmModel[], filmId: number) =>
        films.find((film) => film.id === filmId)
)

export const filmsWithAppliedSettingsSelector = createSelector(
    filmsSelector,
    selectedGenrySelector,
    sortingCategorySelector,
    (
        films: FilmModel[],
        selectedGenre: Genres,
        sortingCategory: Categories
    ) => {
        let filteredFilms = [...films]

        if (selectedGenre && selectedGenre !== Genres.ALL) {
            filteredFilms = filteredFilms.filter((film) =>
                film.genres.includes(selectedGenre)
            )
        }

        switch (sortingCategory) {
            case Categories.RAITING:
                filteredFilms.sort(
                    (firstFilm, secondFilm) =>
                        firstFilm.vote_average - secondFilm.vote_average
                )
                break

            case Categories.RELEASE_DATE:
                filteredFilms.sort(
                    (firstFilm, secondFilm) =>
                        new Date(firstFilm.release_date).getTime() -
                        new Date(secondFilm.release_date).getTime()
                )
                break

            case Categories.GENRE:
                filteredFilms.sort((firstFilm, secondFilm) => {
                    const stringComparator = (
                        firstString: string,
                        secondString: string
                    ) => firstString.localeCompare(secondString)

                    const fisrtFilmFirstAlphabeticGenre = [
                        ...firstFilm.genres,
                    ].sort(stringComparator)[0]

                    const secondFilmFirstAplhabeticGenre = [
                        ...secondFilm.genres,
                    ].sort(stringComparator)[0]

                    return fisrtFilmFirstAlphabeticGenre.localeCompare(
                        secondFilmFirstAplhabeticGenre
                    )
                })
                break

            default:
                return filteredFilms
        }

        return filteredFilms
    }
)
