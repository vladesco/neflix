import React from 'react'
import { Card, ThemeButton } from '../../../atoms'
import { deleteFilmFormStyles } from './delete-film-form.style'

type props = {
    filmId: number
    onCloseForm: () => void
    onDeleteFilm: (filmId: number) => void
}

export const DeleteFilmForm: React.FC<props> = ({
    filmId,
    onCloseForm,
    onDeleteFilm,
}) => {
    const classes = deleteFilmFormStyles()
    return (
        <Card>
            <div className={classes.form}>
                <div className={classes.content}>
                    <p className={classes.title}>Delete movie</p>
                    <p className={classes.subTitle}>
                        Are you sure you want to delete this movie?
                    </p>
                    <div className={classes.buttonArea}>
                        <ThemeButton theme="LIGHT">Confirm</ThemeButton>
                    </div>
                </div>
                <span className={classes.cross} onClick={onCloseForm}>
                    &#215;
                </span>
            </div>
        </Card>
    )
}
