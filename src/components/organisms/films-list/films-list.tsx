import React from 'react'

import { FilmModel } from '../../../shared/services/types'
import { filmsListStyles } from './films-list.style'
import { FilmCard } from '../../molecules'

type props = {
    films: FilmModel[]
    onDeleteFilm: (filmId: number) => void
    onUpdateFilm: (filmId: number) => void
    onSelectFilm: (filmId: number) => void
}

export const FilmsList: React.FC<props> = ({
    films,
    onDeleteFilm,
    onUpdateFilm,
    onSelectFilm,
}) => {
    const classes = filmsListStyles()
    return (
        <div className={classes.filmsList}>
            {films.map((film) => (
                <FilmCard
                    key={film.id}
                    film={film}
                    onUpdateFilm={onUpdateFilm}
                    onDeleteFilm={onDeleteFilm}
                    onSelectFilm={onSelectFilm}
                />
            ))}
        </div>
    )
}
