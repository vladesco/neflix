import React from 'react'
import PropTypes from 'prop-types'
import { Select } from '../../../shared/components/select/select'
import { FilmModel } from '../../../shared/services/types'
import { filmsActionPanelStyles } from './films-action-panel.style'

export const FilmsActionPanel: React.FunctionComponent<{
    films: FilmModel[]
}> = ({ films }) => {
    const genres = ['all', 'documentary', 'comedy', 'horror', 'crime']
    const sortedCategories = [{ text: 'release date', value: 0 }]
    const classes = filmsActionPanelStyles()
    return (
        <div>
            <div className={classes.actionPanel}>
                <div className={classes.nav}>
                    {genres.map((gener) => (
                        <span key={gener}>{gener}</span>
                    ))}
                </div>
                <div className={classes.sorting}>
                    sort by <Select items={sortedCategories} />
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
