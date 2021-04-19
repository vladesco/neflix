import React, { useCallback, useRef, useState } from 'react'
import cn from 'classnames'

import { selectStyles } from './select.style'
import { AtomReactComponent } from '../types'

type valueType = string | number
type props = {
    items: { text: string; value: valueType }[]
    onChange: (value: valueType[] | valueType) => void
    multiple: boolean
    value?: valueType | valueType[]
    placeholder?: string
}

export const Select: AtomReactComponent<props> = ({
    items,
    value = [],
    onChange,
    multiple = false,
    placeholder,
    className,
    onSelect,
    ...props
}) => {
    const classes = selectStyles()
    const [isOpened, setIsOpened] = useState<boolean>(false)
    const [clickedItems, setClickedItems] = useState<valueType[]>(
        multiple ? (value as valueType[]) : [value as valueType]
    )
    const displayedText = clickedItems.length
        ? clickedItems.join(', ')
        : placeholder

    const onItemClick = useCallback(
        (clickedItemValue: valueType) => {
            if (clickedItems.includes(clickedItemValue)) {
                setClickedItems(
                    clickedItems.filter(
                        (itemValue) => itemValue !== clickedItemValue
                    )
                )
            } else if (multiple) {
                const items = [...clickedItems, clickedItemValue]
                onChange(items)
                setClickedItems(items)
            } else {
                onChange(clickedItemValue)
                setClickedItems([clickedItemValue])
                setIsOpened(false)
            }
        },
        [multiple, clickedItems]
    )

    return (
        <div className={cn(classes.wrapper, className)}>
            <div
                onClick={() => setIsOpened(!isOpened)}
                className={cn(classes.select, isOpened ? 'opened' : 'closed')}
            >
                {displayedText}
            </div>
            {isOpened ? (
                <div className={classes.list}>
                    {items.map((item) => (
                        <div
                            onClick={() => onItemClick(item.value)}
                            className={cn(
                                classes.listItem,
                                clickedItems.includes(item.value)
                                    ? 'selected'
                                    : null
                            )}
                        >
                            {item.text}
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    )
}
