import { createUseStyles } from 'react-jss';

export const selectStyles = createUseStyles({
    select: {
        appearance: 'none',
        background: 'transparent',
        backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='%23F65261' height='148' viewBox='0 0 148 148' width='148' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>")`,
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: '200px',
        backgroundPositionY: '15px',
        border: 'none',
        width: '220px',
        fontSize: '22px',
        padding: '1rem',
        textTransform: 'uppercase',
        color: 'white',
        cursor: 'pointer',
        userSelect: 'none',
    }
});

