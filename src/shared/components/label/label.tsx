import React from 'react'
import { labelStyles } from './label.style'

export const Label: React.FunctionComponent = () => {
    const classes = labelStyles()

    return (
        <span className={classes.text}>
            <span className={classes.bold}>neflix</span>roulette
        </span>
    )
}
