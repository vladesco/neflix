import React, { useEffect, useState } from 'react'
import { AtomReactComponent } from '../types'
import { menuStyles } from './menu.style'

export const Menu: AtomReactComponent = ({ children, className }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>()
    const classes = menuStyles()

    return (
        <div className={className}>
            {!isExpanded ? (
                <div
                    className={classes.dots}
                    onClick={() => setIsExpanded(true)}
                >
                    &#8286;
                </div>
            ) : (
                <div className={classes.menu_items}>
                    <span
                        className={classes.cross}
                        onClick={() => setIsExpanded(false)}
                    >
                        &#215;
                    </span>
                    {children}
                </div>
            )}
        </div>
    )
}
