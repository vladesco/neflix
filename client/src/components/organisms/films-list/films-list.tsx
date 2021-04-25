import React from 'react'

import { filmsListStyles } from './films-list.style'
import { FilmCard } from '../../molecules'
import { FilmModel } from '../../../store'

type props = {
    films: FilmModel[]
    onDeleteFilm: (filmId: number) => void
    onSelectFilm: (filmId: number) => void
    onUpdateFilm: (newFilmModel: FilmModel) => void
}

export const FilmsList: React.FC<props> = ({
    films,
    onDeleteFilm,
    onUpdateFilm,
    onSelectFilm,
}) => {
    const classes = filmsListStyles()
    return (
        <>
            <p className={classes.count}>
                <span>{films.length}</span> movies found
            </p>
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
        </>
    )
}
