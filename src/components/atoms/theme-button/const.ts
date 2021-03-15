import { ThemesButton } from './types'

type colors = {
    backgroundColor: string
    color: string
    border: string
}

export const THEME_DESCRIPTIONS: { [key in ThemesButton]: Partial<colors> } = {
    LIGHT: {
        backgroundColor: '#F65261',
        color: 'white',
    },
    MEDIUM: {
        backgroundColor: 'rgba(140, 135, 135, 0.5)',
        color: '#F65261',
    },
    DARK: {
        color: '#F65261',
        backgroundColor: '#232323',
        border: '1px solid #F65261',
    },
}
