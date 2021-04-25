import React from 'react'
import { usePosterImage } from '../../../hooks'
import { FilmModel } from '../../../store'

import { Label } from '../../atoms'
import { filmPreviewStyles } from './film-preview.style'

type props = {
    film: FilmModel
    onShowSearching: () => void
}

export const FilmPreview: React.FC<props> = ({ film, onShowSearching }) => {
    const posterImage = usePosterImage(film.poster_path)
    const classes = filmPreviewStyles(film)
    return (
        <div>
            <div className={classes.flexContainer}>
                <Label />
                <span className={classes.searchIcon} onClick={onShowSearching}>
                    &#x26B2;
                </span>
            </div>
            <div className={classes.flexContainer}>
                <img className={classes.posterImage} src={posterImage} />
                <div className={classes.filmInfo}>
                    <p>
                        <span className={classes.filmTitle}>{film.title}</span>
                        <span className={classes.mark}>
                            {film.vote_average}
                        </span>
                    </p>
                    <p>{film.tagline}</p>
                    <p className={classes.filmTime}>
                        <span>{film.release_date}</span>
                        <span>{film.runtime}</span>
                    </p>
                    <p>{film.overview}</p>
                </div>
            </div>
        </div>
    )
}
