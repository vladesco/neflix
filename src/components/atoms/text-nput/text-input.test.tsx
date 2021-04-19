import React from 'react'
import { screen, render, fireEvent, waitFor } from '@testing-library/react'
import { TextInput } from './text-input'

describe('text input', () => {
    it('should be rendered', () => {
        const testPlaceholder: string = 'test placeholder'
        const { asFragment } = render(
            <TextInput placeholder={testPlaceholder} onChange={null} />
        )

        expect(asFragment()).toMatchSnapshot()
        expect(screen.getByPlaceholderText(testPlaceholder)).toBeTruthy()
    })

    it('should emit entered value', async () => {
        const handleFn = jest.fn()
        const testPlaceholder: string = 'test placeholder'
        const testInputValue: string = 'test input value'
        render(<TextInput placeholder={testPlaceholder} onChange={handleFn} />)

        fireEvent.input(screen.getByPlaceholderText(testPlaceholder), {
            target: { value: testInputValue },
        })

        await waitFor(() =>
            expect(handleFn).toHaveBeenCalledWith(testInputValue)
        )
    })
})
