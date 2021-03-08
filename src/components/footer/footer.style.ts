import { createUseStyles } from 'react-jss';

export const useFooterStyles = createUseStyles({
    footer: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#424242',

        '& *': {
            margin: '16px'
        }
    }
})
