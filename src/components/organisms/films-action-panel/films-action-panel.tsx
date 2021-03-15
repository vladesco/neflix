import React from 'react'

import { FilmModel } from '../../../shared/services/types'
import { Select } from '../../atoms'
import { GENRES, SORTED_CATEGORIES } from '../../const'
import { filmsActionPanelStyles } from './films-action-panel.style'

type props = {
    films: FilmModel[]
    onSetSortedCategory: (category: keyof FilmModel) => void
    sortedCategory: string
}

export const FilmsActionPanel: React.FC<props> = ({
    onSetSortedCategory,
    films,
    sortedCategory,
}) => {
    const classes = filmsActionPanelStyles()
    return (
        <div>
            <div className={classes.actionPanel}>
                <div className={classes.nav}>
                    {GENRES.map((gener) => (
                        <span key={gener.value}>{gener.text}</span>
                    ))}
                </div>
                <div className={classes.sorting}>
                    sort by
                    <Select
                        onSelect={onSetSortedCategory}
                        items={SORTED_CATEGORIES}
                        selectedItem={sortedCategory}
                    />
                </div>
            </div>
            <p className={classes.count}>
                <span>{films.length}</span> movies found
            </p>
        </div>
    )
}
