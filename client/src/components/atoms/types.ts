import React from 'react'

type atomReactProps = { [key: string]: any }

export type AtomReactComponent<T extends Object = {}> = React.FC<
    T & atomReactProps
>
