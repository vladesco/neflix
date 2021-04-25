import React from 'react'
import cn from 'classnames'

import { AtomReactComponent } from '../types'
import { loaderStyle } from './loader.style'

export const Loader: AtomReactComponent = ({ className, ...props }) => {
    const classes = loaderStyle()
    return (
        <div className={cn(classes.ring, className)} {...props}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
