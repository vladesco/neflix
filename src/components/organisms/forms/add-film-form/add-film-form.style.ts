import { createUseStyles } from 'react-jss'

export const addFilmFormStyles = createUseStyles({
    form: {
        display: 'flex',
        flexDirection: 'row',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        paddingTop: '48px',
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
    },
    label: {
        fontSize: '18px',
        textTransform: 'uppercase',
        color: '#F65261',
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
