import { createUseStyles } from 'react-jss'

export const notFoundPageStyles = createUseStyles({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '64px',
        backgroundColor: '#232323',
        color: 'white',
        fontSize: '40px',
    },
    text: {
        fontSize: '160px',
        textShadow:
            'rgb(246, 82, 97) 10px 2px, #8c8787 15px 4px, rgb(0, 159, 227) 2px 10px',
    },
})
