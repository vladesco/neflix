import React from 'react'
import cn from 'classnames'

import { AtomReactComponent } from '../types'
import { themeButtonStyles } from './theme-button.style'
import { ThemesButton } from './types'

type props = { theme: ThemesButton; onClick?: () => void }

export const ThemeButton: AtomReactComponent<props> = ({
    theme,
    children,
    className,
    ...props
}) => {
    const classes = themeButtonStyles(theme)

    return (
        <button className={cn(classes.button, className)} {...props}>
            {children}
        </button>
    )
}
