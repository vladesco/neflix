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
    onClick,
}) => {
    const classes = themeButtonStyles(theme)

    return (
        <div className={cn(classes.button, className)} onClick={onClick}>
            {children}
        </div>
    )
}
