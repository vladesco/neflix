import React from 'react'
import cn from 'classnames'

import { AtomReactComponent } from '../types'
import { dateInputStyles } from './date-input.style'

type props = {
    placeHolder: string
    onChange: (text: string | number) => void
    value?: string | number
}

export const DateInput: AtomReactComponent<props> = ({
    className,
    onChange,
    ...props
}) => {
    const classes = dateInputStyles()
    return (
        <input
            className={cn(classes.input, className)}
            onChange={(event) => onChange(event.target.value)}
            type="date"
            {...props}
        />
    )
}
