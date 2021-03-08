import React from 'react'
import PropTypes from 'prop-types'
import { selectStyles } from './select.style'

export const Select: React.FunctionComponent<{
    items: { value: number; text: string }[]
}> = ({ items }) => {
    const classes = selectStyles()
    return (
        <select className={classes.select}>
            {items.map(({ value, text }) => (
                <option value={value} key={value}>
                    {text}
                </option>
            ))}
        </select>
    )
}

Select.propTypes = {
    items: PropTypes.arrayOf((array, key) =>
        array[key].value != null && array[key].text != null
            ? null
            : new Error('should be all fields')
    ),
}
