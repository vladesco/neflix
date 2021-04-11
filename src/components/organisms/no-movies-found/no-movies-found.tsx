import React from 'react'
import { noMoviesFoundStyles } from './no-movies-found.style'

export const NoMoviesFound: React.FC = () => {
    const classes = noMoviesFoundStyles()
    return (
        <div className={classes.container}>
            <h3 className={classes.text}>No Movies Found</h3>
        </div>
    )
}
