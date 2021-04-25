import { createUseStyles } from 'react-jss'

export const filmCardStyles = createUseStyles({
    card: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        flexWrap: 'wrap',
        width: '300px',
        height: '500px',
    },
    menu: {
        position: 'absolute',
        top: '24px',
        right: '24px',
    },
    poster: {
        width: '100%',
        height: 'calc(100% - 100px)',

        '& *': {
            width: '100%',
            height: '100%',
        },
    },
    info: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        gap: '8px',
    },
    description: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        gap: '8px',
    },
    title: {
        fontSize: '20px',
        color: 'white',
    },
    year: {
        height: 'fit-content',
        whiteSpace: 'nowrap',
        padding: '0 8px',
        border: '1px solid #8c8787',
        borderRadius: '2px',
    },
})
