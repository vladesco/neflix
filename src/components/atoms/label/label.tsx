import React from 'react'
import cn from 'classnames'

import { AtomReactComponent } from '../types'
import { labelStyles } from './label.style'

export const Label: AtomReactComponent = ({ className, ...props }) => {
    const classes = labelStyles()

    return (
        <span className={cn(classes.text, className)} {...props}>
            <span className={classes.bold}>neflix</span>roulette
        </span>
    )
}
