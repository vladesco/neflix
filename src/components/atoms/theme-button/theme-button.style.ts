import { createUseStyles } from 'react-jss'
import { THEME_DESCRIPTIONS } from './const'
import { ThemesButton } from './types'

const baseButtonStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '8px 12px',
    textTransform: 'uppercase',
    borderRadius: '5px',
    cursor: 'pointer',
    userSelect: 'none',
    fontSize: '24px',
}

export const themeButtonStyles = createUseStyles({
    button: (theme: ThemesButton) => {
        const themeStyles = THEME_DESCRIPTIONS[theme]
        return { ...baseButtonStyles, ...themeStyles }
    },
})
