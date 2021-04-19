import React from 'react'
import { render, screen } from '@testing-library/react'
import { AddFilmForm } from './add-film-form'

describe('add film form', () => {
    it('should be rendered', () => {
        const { asFragment } = render(
            <AddFilmForm onAddFilm={null} onCloseForm={null} />
        )

        expect(asFragment()).toMatchSnapshot()
        expect(screen.getByText('Add movie')).toBeTruthy()
    })
})