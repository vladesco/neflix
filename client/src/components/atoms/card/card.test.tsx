import React from 'react'
import { render } from '@testing-library/react'
import { Card } from './card'

describe('card component', () => {
    it('should be rendered', () => {
        const { container, asFragment } = render(<Card />)

        expect(asFragment()).toMatchSnapshot()
        expect(
            container.firstElementChild.className.includes('card')
        ).toBeTruthy()
    })
})
