import React from 'react'
import cn from 'classnames'

import { AtomReactComponent } from '../types'
import { popupStyles } from './popup.style'

export const Popup: AtomReactComponent = ({
    children,
    className,
    ...props
}) => {
    const classes = popupStyles()

    return (
        <div className={cn(classes.overlay, className)} {...props}>
            <div>{children}</div>
        </div>
    )
}
