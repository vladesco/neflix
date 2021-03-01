import { createUseStyles } from 'react-jss';

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
                margin: ['16px', '128px'],
                gap: '10px',
            }
        },

    },

    button_add: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '200px',
        height: '40px',
        backgroundColor: 'rgba(140, 135, 135, 0.5)',
        color: '#F65261',
        fontSize: '24px',
        textTransform: 'uppercase',
        borderRadius: '5px',
        cursor: 'pointer',
    },

    button_searh: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '250px',
        height: '40px',
        backgroundColor: '#F65261',
        color: 'white',
        fontSize: '24px',
        textTransform: 'uppercase',
        borderRadius: '5px',
        cursor: 'pointer',
    },

    label: {
        color: 'white',
        fontSize: '32px',
        textTransform: 'uppercase',
    },

    input: {
        flex: 1,
        height: '40px',
        backgroundColor: '#232323',
        color: 'white',
        borderRadius: '5px',
        border: 'none',
        fontSize: '24px',
        paddingLeft: '24px',
    }
});