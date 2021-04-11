import React from 'react'
import { useHistory } from 'react-router'
import { ThemeButton } from '../../atoms'
import { notFoundPageStyles } from './not-found-page.style'

export const NotFoundPage: React.FC = () => {
    const classes = notFoundPageStyles()
    const history = useHistory()

    return (
        <div className={classes.container}>
            <p>Page Not Found</p>
            <h2 className={classes.text}>404</h2>
            <ThemeButton theme="DARK" onClick={() => history.push('/')}>
                Go Back To Home
            </ThemeButton>
        </div>
    )
}
