import React from 'react'

import { Categories, FilmModel, Genres } from '../../../store'
import { Select } from '../../atoms'
import { GENRES, SORTING_CATEGORIES } from '../../const'
import { filmsActionPanelStyles } from './films-action-panel.style'

type props = {
    films: FilmModel[]
    onSetSortingCategory: (category: Categories) => void
    onSetGenre: (genre: Genres) => void
    sortingCategory: Categories
}

export const FilmsActionPanel: React.FC<props> = ({
    onSetSortingCategory,
    onSetGenre,
    films,
    sortingCategory,
}) => {
    const classes = filmsActionPanelStyles()
    return (
        <div>
            <div className={classes.actionPanel}>
                <div className={classes.nav}>
                    {GENRES.map((genre) => (
                        <span
                            onClick={() => onSetGenre(genre.value)}
                            key={genre.value}
                        >
                            {genre.text}
                        </span>
                    ))}
                </div>
                <div className={classes.sorting}>
                    sort by
                    <Select
                        onSelect={onSetSortingCategory}
                        items={SORTING_CATEGORIES}
                        selectedItem={sortingCategory}
                    />
                </div>
            </div>
            <p className={classes.count}>
                <span>{films.length}</span> movies found
            </p>
        </div>
    )
}
