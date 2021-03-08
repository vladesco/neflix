import React from 'react'
import cn from 'classnames'
import { AtomReactComponent } from '../types'
import { inputStyles } from './input.style'

type props = {
    placeHolder: string
}

export const Input: AtomReactComponent<props> = ({
    placeHolder,
    className,
}) => {
    const classes = inputStyles()
    return (
        <input
            className={cn(classes.input, className)}
            placeholder={placeHolder}
        />
    )
}
