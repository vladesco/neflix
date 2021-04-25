import { createUseStyles } from 'react-jss'

export const filmsSearchingStyles = createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '300px',
        gap: '30px',

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
