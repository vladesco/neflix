import React from 'react'
import { popupStyles } from './popup.style'

export const Popup: React.FC = ({ children }) => {
    const classes = popupStyles()

    return (
        <div className={classes.overlay}>
            <div>{children}</div>
        </div>
    )
}
