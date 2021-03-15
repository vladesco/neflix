import React from 'react'
import cn from 'classnames'

import { AtomReactComponent } from '../types'
import { cardStyles } from './card.style'

export const Card: AtomReactComponent = ({ children, className }) => {
    const classes = cardStyles()

    return <div className={cn(classes.card, className)}>{children}</div>
}
