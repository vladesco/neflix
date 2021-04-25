import React from 'react'

type props = {
    isShown: boolean
}

export const withCondition = <T extends object>(
    Component: React.ComponentType<T>
): React.FC<T & props> => ({ isShown, ...props }: props) =>
    isShown ? <Component {...(props as T)} /> : null
