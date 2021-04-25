import React from 'react'
import { ErrorBoundary } from '../../../shared/components'
import { Films } from '../../templates'

export const FilmsPage: React.FC = () => (
    <ErrorBoundary>
        <Films />
    </ErrorBoundary>
)
