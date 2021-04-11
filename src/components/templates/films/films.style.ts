import { createUseStyles } from 'react-jss'

export const filmsStyles = createUseStyles({
    headerSection: {
        display: 'inline-block',
        width: '100%',
        backgroundImage:
            'linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url(./assets/images/posters.jpg)',
    },
    filmsSection: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#232323',
        color: '#8c8787',
        padding: [0, '48px'],
    },
})
