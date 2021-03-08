import React from 'react'
import { useFooterStyles } from './footer.style'

export const Footer: React.FunctionComponent = ({ children }) => {
    const classes = useFooterStyles()
    return <footer className={classes.footer}>{children}</footer>
}
