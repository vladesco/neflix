import { createUseStyles } from 'react-jss'

export const addFilmFormStyles = createUseStyles({
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '500px',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        '& label': {
            fontSize: '20px',
            textTransform: 'uppercase',
            color: '#F65261',
        },
        '& .error': {
            fontSize: '20px',
            color: '#eb4c2d',
        },
    },
    title: {
        fontSize: '40px',
        color: 'white',
        textTransform: 'uppercase',
    },
    cross: {
        color: 'white',
        fontSize: '48px',
        userSelect: 'none',
        cursor: 'pointer',
        textAlign: 'end',
    },
    buttonArea: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: '32px',
        gap: '16px',
    },
    select: {
        backgroundColor: '#424242',
        width: '100%',
        color: 'white',
        borderRadius: '5px',
    },
})
