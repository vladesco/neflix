import React from 'react'
import { DateInput, Input, ThemeButton } from '../../../atoms'
import { Select } from '../../../atoms'
import { GENRES } from '../../../const'
import { Card } from '../../../molecules'
import { addFilmFormStyles } from './add-film-form.style'

type props = {
    onCloseForm: () => void
    onAddFilm: (filmId: string) => void
}

export const AddFilmForm: React.FC<props> = ({ onCloseForm }) => {
    const classes = addFilmFormStyles()
    return (
        <Card>
            <div className={classes.form}>
                <div className={classes.content}>
                    <p className={classes.title}>Add movie</p>

                    <span className={classes.label}>Title</span>
                    <Input placeHolder="Tile here"></Input>

                    <span className={classes.label}>Release Date</span>
                    <DateInput placeHolder="Select Date" />

                    <span className={classes.label}>Movie URL</span>
                    <Input placeHolder="Movie URL here"></Input>

                    <span className={classes.label}>Genre</span>
                    <Select
                        className={classes.select}
                        placeholder="Select Genre"
                        onSelect={console.log}
                        items={GENRES}
                    ></Select>

                    <span className={classes.label}>Overview</span>
                    <Input placeHolder="Overview here"></Input>

                    <span className={classes.label}>Runtime</span>
                    <Input placeHolder="Runtime here"></Input>

                    <div className={classes.buttonArea}>
                        <ThemeButton theme="DARK">Reset</ThemeButton>
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
