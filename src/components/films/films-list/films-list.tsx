import React from 'react'
import PropTypes from 'prop-types'
import { FilmModel } from '../../../shared/services/types'
import { FilmCard } from '../film-card/film-card'
import { filmsListStyles } from './films-list.style'

export const FilmsList: React.FunctionComponent<{
    films: FilmModel[]
}> = ({ films }) => {
    const classes = filmsListStyles()
    return (
        <div className={classes.filmsList}>
            {films.map((film) => (
                <FilmCard key={film.id} {...film} />
            ))}
        </div>
    )
}

FilmsList.propTypes = {
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
