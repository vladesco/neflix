import { createUseStyles } from 'react-jss'

export const deleteFilmFormStyles = createUseStyles({
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
    subTitle: {
        fontSize: '24px',
        color: 'white',
    },
    cross: {
        color: 'white',
        fontSize: '48px',
        userSelect: 'none',
        cursor: 'pointer',
    },
    buttonArea: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: '32px',
    },
})
