import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { DEFAULT_IMAGE } from './const'
import { Loader } from '../../../atoms/loader/loader'
import { FilmModel } from '../../../../shared/services/types'
import { filmCardStyles } from './film-card.style'
import { Menu } from '../../../molecules/menu/menu'
import { withCondition } from '../../../../hoc'

type props = {
    onDeleteFilm: (filmId: number) => void
    onUpdateFilm: (filmId: number) => void
    film: FilmModel
}

const MenuCondition = withCondition(Menu)

export const FilmCard: React.FC<props> = ({
    film,
    onDeleteFilm,
    onUpdateFilm,
}) => {
    const [image, setImage] = useState<string>()
    const [isMenuShown, showMenu] = useState<boolean>()

    const classes = filmCardStyles(film)

    useEffect(() => {
        fetch(film.poster_path)
            .then((res) => res.blob())
            .then((imageBlob) => setImage(URL.createObjectURL(imageBlob)))
            .catch(() => setImage(DEFAULT_IMAGE))
    }, [film.poster_path])

    return (
        <div
            className={classes.card}
            onMouseEnter={() => showMenu(true)}
            onMouseLeave={() => showMenu(false)}
        >
            <div className={classes.poster}>
                {image ? <img src={image} /> : <Loader />}
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

FilmCard.propTypes = {
    film: PropTypes.shape({
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
    }) as any,
}
