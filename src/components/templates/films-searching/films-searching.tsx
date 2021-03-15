import React from 'react'

import { TextInput, ThemeButton, Label } from '../../atoms'
import { filmsSearchingStyles } from './films-searching.style'

type props = {
    onAddFilm: () => void
}
export const FilmsSearching: React.FC<props> = ({ onAddFilm }) => {
    const classes = filmsSearchingStyles()
    return (
        <div className={classes.container}>
            <div>
                <Label />
                <ThemeButton onClick={onAddFilm} theme="MEDIUM">
                    + Add movie
                </ThemeButton>
            </div>
            <p className={classes.label}>Find your movie</p>
            <div>
                <TextInput
                    className={classes.input}
                    placeHolder="What do you want to watch?"
                />
                <ThemeButton theme="LIGHT">Search</ThemeButton>
            </div>
        </div>
    )
}
