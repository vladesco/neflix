import React from 'react'

export type AtomReactComponent<T extends Object = {}> = React.FC<T & AnyObject>
