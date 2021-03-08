import React from 'react'
import { Label } from '../../../../shared/components'
import { Input, ThemeButton } from '../../../atoms'

import { filmsSearchingStyles } from './films-searching.style'

export const FilmsSearching: React.FunctionComponent = () => {
    const classes = filmsSearchingStyles()
    return (
        <div className={classes.container}>
            <div>
                <Label />
                <ThemeButton theme="MEDIUM">+ add movie</ThemeButton>
            </div>
            <p className={classes.label}>find your movie</p>
            <div>
                <Input
                    className={classes.input}
                    placeHolder="What do you want to watch?"
                />
                <ThemeButton theme="LIGHT">search</ThemeButton>
            </div>
        </div>
    )
}
