import { createUseStyles } from 'react-jss';

export const menuStyles = createUseStyles({
    dots: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: 'white',
        fontSize: '32px',
        borderRadius: '50px',
        userSelect: 'none',
        cursor: 'pointer',
    },
    menu: {
        display: 'inline-flex',
        flexDirection: 'column',
        gap: '12px',
        fontSize: '24px',
        backgroundColor: 'rgba(140, 135, 135, 0.8)',
        color: 'black',
        borderRadius: '5px',
        justifyContent: 'flex-sart',

        '& *': {
            paddingLeft: '4px',
            width: '150px',
            color: 'black',
            userSelect: 'none',
            cursor: 'pointer',

            '&:hover': {
                backgroundColor: '#F65261',
            }
        }
    },

    cross: {
        textAlign: 'end',
        height: '12px',
        marginRight: '4px',
        fontSize: '32px',

        '&:hover': {
            backgroundColor: 'transparent',
        }
    }
})
