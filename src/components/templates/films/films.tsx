import React from 'react'
import { connect } from 'react-redux'
import { useHistory, useLocation, useParams } from 'react-router'
import { useDidMount } from '../../../hooks'

import {
    Categories,
    FilmModel,
    filmsWithAppliedSettingsSelector,
    Genres,
    loadFilms,
    selectedFilmSelector,
    selectFilm,
    addFilm,
    updateFilm,
    deleteFilm,
    setSortingCategory,
    sortingCategorySelector,
    State,
    setGenre,
    removeFilm,
} from '../../../store'
import {
    FilmsActionPanel,
    FilmsList,
    FilmPreview,
    NoMoviesFound,
} from '../../organisms'
import { FilmsSearching } from '../../organisms/films-searching/films-searching'
import { filmsStyles } from './films.style'

type props = {
    films: FilmModel[]
    selectedFilm: FilmModel
    sortingCategory: Categories
    loadFilms: (query?: string) => void
    addFilm: () => void
    updateFilm: (newFilmModel: FilmModel) => void
    deleteFilm: (filmId: number) => void
    selectFilm: (filmtId: number) => void
    setSortingCategory: (category: Categories) => void
    setGenre: (genre: Genres) => void
}
const Component: React.FC<props> = ({
    films,
    sortingCategory,
    selectedFilm,
    setGenre,
    setSortingCategory,
    selectFilm,
    loadFilms,
    addFilm,
    updateFilm,
    deleteFilm,
}) => {
    const classes = filmsStyles()
    const { query, id } = useParams<{ query: string; id: string }>()
    const history = useHistory()

    useDidMount(() => {
        if (id) {
            selectFilm(Number(id))
        }
        loadFilms(query)
    })

    return (
        <>
            <div className={classes.headerSection}>
                {selectedFilm ? (
                    <FilmPreview
                        film={selectedFilm}
                        onShowSearching={() => {
                            history.push('/')
                            selectFilm(null)
                        }}
                    />
                ) : (
                    <FilmsSearching
                        onAddFilm={addFilm}
                        onFilmSearch={(filmTitle) => {
                            const query = `search=${filmTitle}&searchBy=title`
                            history.push(`/search/${query}`)
                            loadFilms(query)
                        }}
                    />
                )}
            </div>

            <div className={classes.filmsSection}>
                <FilmsActionPanel
                    films={films}
                    sortingCategory={sortingCategory}
                    onSetSortingCategory={setSortingCategory}
                    onSetGenre={setGenre}
                />
                {query && films.length ? (
                    <FilmsList
                        films={films}
                        onDeleteFilm={deleteFilm}
                        onUpdateFilm={updateFilm}
                        onSelectFilm={(filmId) => {
                            history.push(`/film/${filmId}`)
                            selectFilm(filmId)
                        }}
                    />
                ) : (
                    <NoMoviesFound />
                )}
            </div>
        </>
    )
}

const mapStateToProps = (state: State) => {
    return {
        films: filmsWithAppliedSettingsSelector(state),
        selectedFilm: selectedFilmSelector(state),
        sortingCategory: sortingCategorySelector(state),
    }
}

export const Films = connect(mapStateToProps, {
    loadFilms,
    removeFilm,
    addFilm,
    updateFilm,
    selectFilm,
    deleteFilm,
    setSortingCategory,
    setGenre,
})(Component as any)
