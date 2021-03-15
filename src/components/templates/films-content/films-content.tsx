import React from 'react'

import { FilmModel } from '../../../shared/services/types'
import { FilmsActionPanel, FilmsList } from '../../organisms'
import { filmsContentStyles } from './films-content.style'

type props = {
    films: FilmModel[]
    onDeleteFilm: (filmId: number) => void
    onUpdateFilm: (filmId: number) => void
    onSetSortedCategory: (category: keyof FilmModel) => void
    sortedCategory: string
}
export const FilmsContent: React.FC<props> = ({
    films,
    onDeleteFilm,
    onUpdateFilm,
    sortedCategory,
    onSetSortedCategory,
}) => {
    const classes = filmsContentStyles()

    return (
        <div className={classes.filmsSection}>
            <FilmsActionPanel
                films={films}
                sortedCategory={sortedCategory}
                onSetSortedCategory={onSetSortedCategory}
            />
            <FilmsList
                films={films}
                onDeleteFilm={onDeleteFilm}
                onUpdateFilm={onUpdateFilm}
            />
        </div>
    )
}
