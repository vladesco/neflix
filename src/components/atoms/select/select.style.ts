import { createUseStyles } from 'react-jss'

export const selectStyles = createUseStyles({
    wrapper: {
        display: 'inline-block',
        position: 'relative',
    },
    select: {
        position: 'relative',
        appearance: 'none',
        background: 'transparent',
        backgroundColor: '#232323',
        border: 'none',
        fontSize: '22px',
        padding: '8px 24px 8px 8px',
        textTransform: 'uppercase',
        color: 'white',
        cursor: 'pointer',
        userSelect: 'none',
        opacity: 0.5,
        zIndex: 2,
    },
    marker: {
        position: 'absolute',
        top: '50%',
        right: 0,
        transform: 'translateY(-50%)',
        color: '#F65261',
        fontSize: '24px',
        userSelect: 'none',
        cursor: 'pointer',
        zIndex: 1,
    },
})
