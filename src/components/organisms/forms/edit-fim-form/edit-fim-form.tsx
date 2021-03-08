import React from 'react'
import { FilmModel } from '../../../../shared/services/types'
import { DateInput, Input, ThemeButton } from '../../../atoms'
import { Select } from '../../../atoms'
import { GENRES } from '../../../const'
import { Card } from '../../../molecules'
import { editFilmFormStyles } from './edit-film-form.style'

type props = {
    edittedFilm: FilmModel
    onCloseForm: () => void
    onEditFilm: (filmId: string) => void
}

export const EditFilmForm: React.FC<props> = ({ onCloseForm, edittedFilm }) => {
    const classes = editFilmFormStyles()
    return (
        <Card>
            <div className={classes.form}>
                <div className={classes.content}>
                    <p className={classes.title}>Edit movie</p>

                    <span className={classes.label}>Movie id</span>
                    <span>{edittedFilm.id}</span>

                    <span className={classes.label}>Title</span>
                    <Input
                        placeHolder="Tile here"
                        value={edittedFilm.title}
                    ></Input>

                    <span className={classes.label}>Release Date</span>
                    <DateInput
                        placeHolder="Select Date"
                        value={edittedFilm.release_date}
                    />

                    <span className={classes.label}>Movie URL</span>
                    <Input
                        placeHolder="Movie URL here"
                        value={edittedFilm.poster_path}
                    ></Input>

                    <span className={classes.label}>Genre</span>
                    <Select
                        className={classes.select}
                        placeholder="Select Genre"
                        onSelect={console.log}
                        items={GENRES}
                    ></Select>

                    <span className={classes.label}>Overview</span>
                    <Input
                        placeHolder="Overview here"
                        value={edittedFilm.overview}
                    ></Input>

                    <span className={classes.label}>Runtime</span>
                    <Input
                        placeHolder="Runtime here"
                        value={edittedFilm.runtime}
                    ></Input>

                    <div className={classes.buttonArea}>
                        <ThemeButton theme="DARK">Reset</ThemeButton>
                        <ThemeButton theme="LIGHT">Save</ThemeButton>
                    </div>
                </div>
                <span className={classes.cross} onClick={onCloseForm}>
                    &#215;
                </span>
            </div>
        </Card>
    )
}
