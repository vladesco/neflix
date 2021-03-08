import React from 'react'
import { Popup } from '../../components/molecules'

export const withPopup = <T extends object>(
    Component: React.ComponentType<T>
): React.FC<T> => (props) => (
    <Popup>
        <Component {...props} />
    </Popup>
)
