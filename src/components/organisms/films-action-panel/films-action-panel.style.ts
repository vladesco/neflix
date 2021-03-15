import { createUseStyles } from 'react-jss';

export const filmsActionPanelStyles = createUseStyles({
    actionPanel: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '16px',
        borderBottom: '2px solid #424242',
    },
    nav: {
        display: 'flex',
        gap: '16px',
        fontSize: '22px',
        color: 'white',
        textTransform: 'uppercase',

        '& *': {
            cursor: 'pointer',
            userSelect: 'none',
        }
    },
    sorting: {
        textTransform: 'uppercase',
        fontSize: '22px',
    },
    count: {
        marginTop: '16px',
        fontSize: '22px',
        '& span': {
            color: 'white'
        }
    }
})