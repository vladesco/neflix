import { createUseStyles } from 'react-jss'

export const popupStyles = createUseStyles({
    overlay: {
        display: 'flex',
        padding: '8px',
        justifyContent: 'center!important',
        alignItems: 'center!important',
        position: 'fixed!important',
        margin: '0!important',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: '999!important',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        overflow: 'auto',
    },
})
