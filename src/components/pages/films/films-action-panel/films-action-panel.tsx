import React from 'react'
import PropTypes from 'prop-types'

import { Select } from '../../../atoms'
import { FilmModel } from '../../../../shared/services/types'
import { filmsActionPanelStyles } from './films-action-panel.style'
import { GENRES, SORTED_CATEGORIES } from '../../../const'

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

FilmsActionPanel.propTypes = {
    films: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            tagline: PropTypes.string,
            vote_average: PropTypes.number,
            vote_count: PropTypes.number,
            release_date: PropTypes.string,
            poster_path: PropTypes.string,
            overview: PropTypes.string,
            budget: PropTypes.number,
            revenue: PropTypes.number,
            genres: PropTypes.arrayOf(PropTypes.string),
            runtime: PropTypes.number,
        }).isRequired as any
    ),
}
