import { createUseStyles } from 'react-jss';

export const loaderStyle = createUseStyles({
    '@keyframes lds-ring': {
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(360deg)' },
    },
    ring: {
        display: 'flex',
        position: 'relative',
        width: '80px',
        height: '80px',
        justifyContent: 'center',
        alignItems: 'center',

        '& div': {
            boxSizing: 'border-box',
            display: 'block',
            position: 'absolute',
            width: '64px',
            height: '64px',
            margin: '8px',
            border: '8px solid white',
            borderRadius: '50%',
            animation: '$lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
            borderColor: 'white transparent transparent transparent',

            '&:nth-child(1)': {
                animationDelay: '-0.45s'
            },
            '&:nth-child(2)': {
                animationDelay: '-0.30s'
            },
            '&:nth-child(3)': {
                animationDelay: '-0.15s'
            }
        },
    },
})
