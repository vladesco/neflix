import { createUseStyles } from 'react-jss'

export const noMoviesFoundStyles = createUseStyles({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: '56px',
        color: 'white',
    },
})
