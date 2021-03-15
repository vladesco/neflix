import React from 'react'
import { cardStyles } from './card.style'

export const Card: React.FC = ({ children }) => {
    const classes = cardStyles()

    return <div className={classes.card}>{children}</div>
}
