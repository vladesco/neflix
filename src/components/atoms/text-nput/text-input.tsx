import React from 'react'
import cn from 'classnames'

import { AtomReactComponent } from '../types'
import { textInputStyles } from './text-input.style'

type props = {
    placeholder: string
    value?: string | number
    onChange: (value: string | number) => void
}

export const TextInput: AtomReactComponent<props> = ({
    className,
    onChange,
    ...props
}) => {
    const classes = textInputStyles()
    return (
        <input
            className={cn(classes.input, className)}
            onChange={(event) =>
                onChange(event.target.valueAsNumber || event.target.value)
            }
            {...props}
        />
    )
}
