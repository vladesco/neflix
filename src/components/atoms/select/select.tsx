import React, { useRef } from 'react'
import cn from 'classnames'

import { selectStyles } from './select.style'
import { withCondition } from '../../../hoc/with-condition/with-condition'
import { AtomReactComponent } from '../types'

type props = {
    items: { text: string; value: string | number }[]
    onSelect: (value: string | number) => void
    selectedItem?: string
    placeholder?: string
}

const placeHolder: React.FC<{ placeholder: string }> = ({ placeholder }) => (
    <option value="" disabled selected>
        {placeholder}
    </option>
)

const ConditionPlaceholder = withCondition(placeHolder)

export const Select: AtomReactComponent<props> = ({
    items,
    selectedItem,
    placeholder,
    className,
    onSelect,
}) => {
    const classes = selectStyles()
    return (
        <div className={classes.wrapper}>
            <select
                className={cn(classes.select, className)}
                onChange={(event) => onSelect(event.target.value)}
            >
                <ConditionPlaceholder
                    isShown={Boolean(placeholder)}
                    placeholder={placeholder}
                />

                {items.map(({ value, text }) => (
                    <option
                        value={value}
                        key={value}
                        selected={value === selectedItem}
                    >
                        {text}
                    </option>
                ))}
            </select>
            <p className={classes.marker}>&#9662;</p>
        </div>
    )
}
