import { createUseStyles } from 'react-jss'

export const filmsListStyles = createUseStyles({
    filmsList: {
        display: 'flex',
        marginTop: '16px',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
        marginBottom: '24px',
    },
    count: {
        marginTop: '16px',
        fontSize: '22px',
        '& span': {
            color: 'white',
        },
    },
})
