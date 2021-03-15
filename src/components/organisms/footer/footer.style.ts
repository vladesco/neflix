import { createUseStyles } from 'react-jss'

export const useFooterStyles = createUseStyles({
    footer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#424242',

        '& *': {
            margin: '16px',
        },
    },
})
