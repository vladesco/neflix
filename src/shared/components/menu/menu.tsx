import React, { useEffect, useState } from 'react'
import { menuStyles } from './menu.style'

export const Menu: React.FunctionComponent = ({ children }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>()
    const classes = menuStyles()

    return (
        <>
            {!isExpanded ? (
                <div
                    className={classes.dots}
                    onClick={() => setIsExpanded(true)}
                >
                    &#8286;
                </div>
            ) : (
                <div className={classes.menu}>
                    <span
                        className={classes.cross}
                        onClick={() => setIsExpanded(false)}
                    >
                        &#215;
                    </span>
                    {children}
                </div>
            )}
        </>
    )
}
