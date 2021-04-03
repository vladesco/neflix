import React, { useCallback, useState } from 'react'
import { withCondition, withPopup } from '../../../hoc'
import { usePosterImage } from '../../../hooks'
import { FilmModel } from '../../../store'
import { Loader, Menu } from '../../atoms'
import { EditFilmForm, DeleteFilmForm } from '../forms'
import { filmCardStyles } from './film-card.style'

const DeleteFilmFormWithPopup = withCondition(withPopup(DeleteFilmForm))
const EditFilFormWithPopup = withCondition(withPopup(EditFilmForm))

type props = {
    onDeleteFilm: (filmId: number) => void
    onUpdateFilm: (newFilmModel: FilmModel) => void
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
    const classes = filmCardStyles(film)

    const [isMenuShown, showMenu] = useState<boolean>()
    const [isDeleteFormShown, showDeleteForm] = useState<boolean>()
    const [isEditFormShown, showEditForm] = useState<boolean>()

    const selectFilm = useCallback(() => onSelectFilm(film.id), [film.id])
    const deleteFilm = useCallback(() => {
        onDeleteFilm(film.id)
        showDeleteForm(false)
    }, [film.id])
    const updateFilm = useCallback(
        (newFilmModel: FilmModel) => {
            onUpdateFilm(newFilmModel)
            showEditForm(false)
        },
        [film]
    )

    return (
        <>
            <DeleteFilmFormWithPopup
                isShown={isDeleteFormShown}
                onDeleteFilm={deleteFilm}
                onCloseForm={() => showDeleteForm(false)}
            />

            <EditFilFormWithPopup
                edittedFilm={film}
                isShown={isEditFormShown}
                onEditFilm={updateFilm}
                onCloseForm={() => showEditForm(false)}
            />
            <div
                className={classes.card}
                onMouseEnter={() => showMenu(true)}
                onMouseLeave={() => showMenu(false)}
                onClick={selectFilm}
            >
                <div className={classes.poster}>
                    {posterImage ? <img src={posterImage} /> : <Loader />}
                </div>

                <div
                    className={classes.menu}
                    onClick={(e) => e.stopPropagation()}
                >
                    <MenuCondition isShown={isMenuShown}>
                        <span onClick={() => showEditForm(true)}>Edit</span>
                        <span onClick={() => showDeleteForm(true)}>Delete</span>
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
        </>
    )
}
