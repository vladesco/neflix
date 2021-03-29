import React from 'react'
import { FilmModel } from '../../../../store'
import { Card, DateInput, TextInput, ThemeButton } from '../../../atoms'
import { Select } from '../../../atoms'
import { GENRES } from '../../../const'
import { editFilmFormStyles } from './edit-film-form.style'

type props = {
    edittedFilm: FilmModel
    onCloseForm: () => void
    onEditFilm: (newFilmModel: FilmModel) => void
}

export const EditFilmForm: React.FC<props> = ({
    onCloseForm,
    onEditFilm,
    edittedFilm,
}) => {
    const classes = editFilmFormStyles()
    return (
        <Card>
            <div className={classes.form}>
                <div className={classes.content}>
                    <p className={classes.title}>Edit movie</p>

                    <span className={classes.label}>Movie id</span>
                    <span>{edittedFilm.id}</span>

                    <span className={classes.label}>Title</span>
                    <TextInput
                        placeHolder="Tile here"
                        value={edittedFilm.title}
                    />

                    <span className={classes.label}>Release Date</span>
                    <DateInput
                        placeHolder="Select Date"
                        value={edittedFilm.release_date}
                    />

                    <span className={classes.label}>Movie URL</span>
                    <TextInput
                        placeHolder="Movie URL here"
                        value={edittedFilm.poster_path}
                    />

                    <span className={classes.label}>Genre</span>
                    <Select
                        className={classes.select}
                        placeholder="Select Genre"
                        onSelect={console.log}
                        items={GENRES}
                    ></Select>

                    <span className={classes.label}>Overview</span>
                    <TextInput
                        placeHolder="Overview here"
                        value={edittedFilm.overview}
                    />

                    <span className={classes.label}>Runtime</span>
                    <TextInput
                        placeHolder="Runtime here"
                        value={edittedFilm.runtime}
                    />

                    <div className={classes.buttonArea}>
                        <ThemeButton theme="DARK">Reset</ThemeButton>
                        <ThemeButton
                            onClick={() => onEditFilm(edittedFilm)}
                            theme="LIGHT"
                        >
                            Save
                        </ThemeButton>
                    </div>
                </div>
                <span className={classes.cross} onClick={onCloseForm}>
                    &#215;
                </span>
            </div>
        </Card>
    )
}
