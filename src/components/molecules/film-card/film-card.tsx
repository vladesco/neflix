import React, { useState } from 'react'
import { Menu } from '..'
import { withCondition } from '../../../hoc'
import { usePosterImage } from '../../../hooks'
import { FilmModel } from '../../../shared/services/types'
import { Loader } from '../../atoms'
import { filmCardStyles } from './film-card.style'

type props = {
    onDeleteFilm: (filmId: number) => void
    onUpdateFilm: (filmId: number) => void
    onSelectFilm: (filmId: number) => void
    film: FilmModel
}

const MenuCondition = withCondition(Menu)

export const FilmCard: React.FC<props> = ({
    film,
    onDeleteFilm,
    onUpdateFilm,
    onSelectFilm,
}) => {
    const posterImage = usePosterImage(film.poster_path)
    const [isMenuShown, showMenu] = useState<boolean>()

    const classes = filmCardStyles(film)

    return (
        <div
            className={classes.card}
            onMouseEnter={() => showMenu(true)}
            onMouseLeave={() => showMenu(false)}
            onClick={() => onSelectFilm(film.id)}
        >
            <div className={classes.poster}>
                {posterImage ? <img src={posterImage} /> : <Loader />}
            </div>

            <div className={classes.menu}>
                <MenuCondition isShown={isMenuShown}>
                    <span onClick={() => onUpdateFilm(film.id)}>Edit</span>
                    <span onClick={() => onDeleteFilm(film.id)}>Delete</span>
                </MenuCondition>
            </div>

            <div className={classes.info}>
                <div className={classes.description}>
                    <p className={classes.title}>{film.title}</p>
                    {film.genres.join(' ')}
                </div>
                <p className={classes.year}>{film.release_date}</p>
            </div>
        </div>
    )
}
