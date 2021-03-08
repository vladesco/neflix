import React from 'react'

type atomReactProps = { className?: string }

export type AtomReactComponent<T extends Object = {}> = React.FC<
    T & atomReactProps
>
