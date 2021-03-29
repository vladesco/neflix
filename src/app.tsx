import React from 'react'
import { Label } from './components/atoms'
import { Footer } from './components/organisms'
import { FilmsPage } from './components/pages/films-page/films-page'

export const App = () => (
    <>
        <FilmsPage />
        <Footer>
            <Label />
        </Footer>
    </>
)
