import { createUseStyles } from 'react-jss'

export const filmsSearchingStyles = createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '300px',
        position: 'relative',
        backgroundImage: 'url(./assets/images/posters.jpg)',
        gap: '30px',

        '&:after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, .9)',
            zIndex: 1,
        },

        '& >*': {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            zIndex: 2,

            '&:nth-child(1)': {
                margin: ['16px', '64px'],
            },

            '&:nth-child(2)': {
                margin: ['16px', '128px'],
            },

            '&:nth-child(3)': {
                display: 'flex',
                height: '40px',
                margin: ['16px', '128px'],
                gap: '10px',
            },
        },
    },

    label: {
        color: 'white',
        fontSize: '32px',
        textTransform: 'uppercase',
    },

    input: {
        flex: 1,
    },
})
