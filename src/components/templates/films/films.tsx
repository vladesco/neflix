import React from 'react'
import { connect } from 'react-redux'
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
import { FilmsActionPanel, FilmsList } from '../../organisms'
import { FilmPreview } from '../../organisms/film-preview/film-preview'
import { FilmsSearching } from '../../organisms/films-searching/films-searching'
import { filmsStyles } from './films.style'

type props = {
    films: FilmModel[]
    selectedFilm: FilmModel
    sortingCategory: Categories
    loadFilms: () => void
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
    useDidMount(loadFilms)

    return (
        <>
            <div className={classes.headerSection}>
                {selectedFilm ? (
                    <FilmPreview
                        film={selectedFilm}
                        onShowSearching={() => selectFilm(null)}
                    />
                ) : (
                    <FilmsSearching onAddFilm={addFilm} />
                )}
            </div>

            <div className={classes.filmsSection}>
                <FilmsActionPanel
                    films={films}
                    sortingCategory={sortingCategory}
                    onSetSortingCategory={setSortingCategory}
                    onSetGenre={setGenre}
                />
                <FilmsList
                    films={films}
                    onDeleteFilm={deleteFilm}
                    onUpdateFilm={updateFilm}
                    onSelectFilm={selectFilm}
                />
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
