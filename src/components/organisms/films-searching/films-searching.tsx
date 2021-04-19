import React, { useCallback, useState } from 'react'
import { withCondition, withPopup } from '../../../hoc'
import { CreateFilmBody } from '../../../store'
import { TextInput, ThemeButton, Label } from '../../atoms'
import { AddFilmForm } from '../../molecules'
import { filmsSearchingStyles } from './films-searching.style'

const AddFilFormWithPopup = withCondition(withPopup(AddFilmForm))

type props = {
    onAddFilm: (filmBody: CreateFilmBody) => void
    onFilmSearch: (filmTitle: string) => void
}
export const FilmsSearching: React.FC<props> = ({
    onAddFilm,
    onFilmSearch,
}) => {
    const classes = filmsSearchingStyles()
    const [isAddFormShown, showAddForm] = useState<boolean>()
    const [searchingFilmTitle, setSearchingFilmTitle] = useState<string>()

    const addFilm = useCallback((filmBody: CreateFilmBody) => {
        onAddFilm(filmBody)
        showAddForm(false)
    }, [])
    return (
        <div className={classes.container}>
            <AddFilFormWithPopup
                onAddFilm={addFilm}
                onCloseForm={() => showAddForm(false)}
                isShown={isAddFormShown}
            />
            <div>
                <Label />
                <ThemeButton onClick={() => showAddForm(true)} theme="MEDIUM">
                    + Add movie
                </ThemeButton>
            </div>
            <p className={classes.label}>Find your movie</p>
            <div>
                <TextInput
                    className={classes.input}
                    placeHolder="What do you want to watch?"
                    onChange={setSearchingFilmTitle as any}
                />
                <ThemeButton
                    theme="LIGHT"
                    onClick={() => {
                        if (searchingFilmTitle) onFilmSearch(searchingFilmTitle)
                    }}
                >
                    Search
                </ThemeButton>
            </div>
        </div>
    )
}
