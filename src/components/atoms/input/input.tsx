import React from 'react'
import cn from 'classnames'

import { AtomReactComponent } from '../types'
import { inputStyles } from './input.style'

type props = {
    placeHolder: string
    value?: string | number
}

export const Input: AtomReactComponent<props> = ({
    placeHolder,
    className,
    value,
}) => {
    const classes = inputStyles()
    return (
        <input
            className={cn(classes.input, className)}
            value={value}
            placeholder={placeHolder}
        />
    )
}
