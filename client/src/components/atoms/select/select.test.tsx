import React from 'react'
import { fireEvent, render, waitFor, screen } from '@testing-library/react'
import { Select } from './select'

describe('select', () => {
    it('should be rendered', () => {
        const { container, asFragment } = render(
            <Select onChange={null} items={[]} multiple={false} />
        )

        expect(asFragment()).toMatchSnapshot()
        expect(
            container.firstElementChild.className.includes('wrapper')
        ).toBeTruthy()
    })

    it('should expand on first click and collapse after second click', async () => {
        const items = [
            { text: 'item', value: 'first item' },
            { text: 'item', value: 'second item' },
            { text: 'item', value: 'third item' },
        ]
        let displayedItems: HTMLElement[]

        const { container } = render(
            <Select onChange={null} items={items} multiple={false} />
        )
        const selectInput = container.firstChild.firstChild

        fireEvent.click(selectInput)
        displayedItems = await waitFor(() => screen.queryAllByText('item'))

        expect(displayedItems.length).toBe(items.length)

        fireEvent.click(selectInput)
        displayedItems = await waitFor(() => screen.queryAllByText('item'))

        expect(displayedItems.length).toBe(0)
    })

    it('should emit selected item on click and display it', async () => {
        const items = [
            { text: 'first item', value: 'first item' },
            { text: 'second item', value: 'second item' },
            { text: 'third item', value: 'third item' },
        ]
        const changeFn = jest.fn()
        const { container } = render(
            <Select onChange={changeFn} items={items} multiple={false} />
        )
        const selectInput = container.firstChild.firstChild

        fireEvent.click(selectInput)

        const firstItem = await waitFor(() => screen.queryByText('first item'))

        fireEvent.click(firstItem)

        expect(changeFn).toBeCalledWith(items[0].value)
        expect(selectInput.textContent).toBe(items[0].text)
    })

    it('should emit array of all selected items and display them whem multiple flag is true', async () => {
        const items = [
            { text: 'first item', value: 'first item' },
            { text: 'second item', value: 'second item' },
            { text: 'third item', value: 'third item' },
        ]
        const changeFn = jest.fn()
        const { container } = render(
            <Select onChange={changeFn} items={items} multiple={true} />
        )
        const selectInput = container.firstChild.firstChild

        fireEvent.click(selectInput)

        const firstItem = await waitFor(() => screen.queryByText('first item'))

        fireEvent.click(firstItem)

        let [emittedItems] = changeFn.mock.calls[0]

        expect(emittedItems).toEqual([items[0].value])
        expect(selectInput.textContent).toBe(items[0].text)

        const secondItem = await waitFor(() =>
            screen.queryByText('second item')
        )

        fireEvent.click(secondItem)
        const [newEmittedItems] = changeFn.mock.calls[1]

        expect(newEmittedItems).toEqual([items[0].value, items[1].value])
        expect(selectInput.textContent).toBe(
            items[0].text.concat(', ').concat(items[1].text)
        )
    })
})
