import { createUseStyles } from 'react-jss'

export const popupStyles = createUseStyles({
    overlay: {
        display: 'flex',
        padding: '8px',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 999,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        overflow: 'auto',
    },
})
