import React from 'react'
import cn from 'classnames'

import { AtomReactComponent } from '../types'
import { themeButtonStyles } from './theme-button.style'
import { ThemesButton } from './types'

type props = { theme: ThemesButton }

export const ThemeButton: AtomReactComponent<props> = ({
    theme,
    children,
    className,
}) => {
    const classes = themeButtonStyles(theme)

    return <div className={cn(classes.button, className)}>{children}</div>
}
