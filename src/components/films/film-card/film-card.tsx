import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Loader } from '../../../shared/components/loader/loader'
import { FilmModel } from '../../../shared/services/types'
import { filmCardStyles } from './film-card.style'
import { Menu } from '../../../shared/components/menu/menu'

const defaultImage = `data:image/svg+xml,<svg id="_x31_" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m17.453 24c-.168 0-.34-.021-.51-.066l-15.463-4.141c-1.06-.292-1.692-1.39-1.414-2.45l1.951-7.272c.072-.267.346-.422.612-.354.267.071.425.346.354.612l-1.95 7.27c-.139.53.179 1.082.71 1.229l15.457 4.139c.531.14 1.079-.176 1.217-.704l.781-2.894c.072-.267.346-.426.613-.353.267.072.424.347.353.613l-.78 2.89c-.235.89-1.045 1.481-1.931 1.481z"/></g><g><path d="m22 18h-16c-1.103 0-2-.897-2-2v-12c0-1.103.897-2 2-2h16c1.103 0 2 .897 2 2v12c0 1.103-.897 2-2 2zm-16-15c-.551 0-1 .449-1 1v12c0 .551.449 1 1 1h16c.551 0 1-.449 1-1v-12c0-.551-.449-1-1-1z"/></g><g><path d="m9 9c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1z"/></g><g><path d="m4.57 16.93c-.128 0-.256-.049-.354-.146-.195-.195-.195-.512 0-.707l4.723-4.723c.566-.566 1.555-.566 2.121 0l1.406 1.406 3.892-4.67c.283-.339.699-.536 1.142-.54h.011c.438 0 .853.19 1.139.523l5.23 6.102c.18.209.156.525-.054.705-.209.18-.524.157-.705-.054l-5.23-6.102c-.097-.112-.231-.174-.38-.174-.104-.009-.287.063-.384.18l-4.243 5.091c-.09.108-.221.173-.362.179-.142.01-.277-.046-.376-.146l-1.793-1.793c-.189-.188-.518-.188-.707 0l-4.723 4.723c-.097.097-.225.146-.353.146z"/></g></svg>`

export const FilmCard: React.FunctionComponent<FilmModel> = ({
    children,
    ...film
}) => {
    const [image, setImage] = useState<string>()
    const [isMenuShown, showMenu] = useState<boolean>()
    const classes = filmCardStyles(film)

    useEffect(() => {
        fetch(film.poster_path)
            .then((res) => res.blob())
            .then((imageBlob) => setImage(URL.createObjectURL(imageBlob)))
            .catch(() => setImage(defaultImage))
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
                {isMenuShown ? (
                    <Menu>
                        <span>Edit</span>
                        <span>Delete</span>
                    </Menu>
                ) : null}
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
}
