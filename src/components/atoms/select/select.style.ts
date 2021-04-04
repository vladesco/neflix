import { createUseStyles } from 'react-jss'

export const selectStyles = createUseStyles({
    wrapper: {
        display: 'inline-block',
        position: 'relative',
    },
    select: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: '16px',
        cursor: 'pointer',

        '&.opened': {
            '&::after': {
                fontSize: '24px',
                content: '"▲"',
                color: '#F65261',
            },
        },

        '&::after': {
            fontSize: '24px',
            content: '"▼"',
            color: '#F65261',
        },
    },
    list: {
        position: 'absolute',
        right: '0',
        zIndex: '999',
        width: '100%',
        boxSizing: 'border-box',
        padding: '8px',
        marginTop: '16px',
        backgroundColor: '#232323',
        boxShadow: '5px 5px 15px 5px #000000',
    },
    listItem: {
        cursor: 'pointer',
        margin: '8px',
        '&.selected': {
            color: '#F65261',
        },
        '&:hover': {
            color: 'black',
        },
    },
})
