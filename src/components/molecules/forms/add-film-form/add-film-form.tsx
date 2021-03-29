import React from 'react'
import { CreateFilmBody } from '../../../../store'
import { Card, DateInput, TextInput, ThemeButton } from '../../../atoms'
import { Select } from '../../../atoms'
import { GENRES } from '../../../const'
import { addFilmFormStyles } from './add-film-form.style'

type props = {
    onCloseForm: () => void
    onAddFilm: (filmBody: CreateFilmBody) => void
}

export const AddFilmForm: React.FC<props> = ({ onCloseForm, onAddFilm }) => {
    const classes = addFilmFormStyles()
    return (
        <Card>
            <div className={classes.form}>
                <div className={classes.content}>
                    <p className={classes.title}>Add movie</p>

                    <span className={classes.label}>Title</span>
                    <TextInput placeHolder="Tile here" />

                    <span className={classes.label}>Release Date</span>
                    <DateInput placeHolder="Select Date" />

                    <span className={classes.label}>Movie URL</span>
                    <TextInput placeHolder="Movie URL here" />

                    <span className={classes.label}>Genre</span>
                    <Select
                        className={classes.select}
                        placeholder="Select Genre"
                        onSelect={console.log}
                        items={GENRES}
                    ></Select>

                    <span className={classes.label}>Overview</span>
                    <TextInput placeHolder="Overview here" />

                    <span className={classes.label}>Runtime</span>
                    <TextInput placeHolder="Runtime here" />

                    <div className={classes.buttonArea}>
                        <ThemeButton
                            onClick={() => onAddFilm(null)}
                            theme="LIGHT"
                        >
                            Confirm
                        </ThemeButton>
                    </div>
                </div>
                <span onClick={onCloseForm} className={classes.cross}>
                    &#215;
                </span>
            </div>
        </Card>
    )
}
