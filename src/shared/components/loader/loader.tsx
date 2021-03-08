import React from 'react'
import { loaderStyle } from './loader.style'

export const Loader: React.FunctionComponent = () => {
    const classes = loaderStyle()
    return (
        <div className={classes.ring}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
