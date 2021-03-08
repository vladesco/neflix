import React from 'react'
import { Label } from '../../../shared/components/label/label'
import { filmsSearchingStyles } from './films-searching.style'

export const FilmsSearching: React.FunctionComponent = () => {
    const classes = filmsSearchingStyles()
    return (
        <div className={classes.container}>
            <div>
                <Label />
                <div className={classes.button_add}>+ add movie</div>
            </div>
            <p className={classes.label}>find your movie</p>
            <div>
                <input
                    className={classes.input}
                    placeholder="What do you want to watch?"
                />
                <div className={classes.button_searh}>search</div>
            </div>
        </div>
    )
}
