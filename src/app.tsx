import React from 'react'
import jss from 'jss'
import plugin from 'jss-plugin-extend'
import { FilmsService } from './shared/services/films.service'
import { Label } from './components/atoms'
import { Footer } from './components/organisms'
import { FilmsPage } from './components/pages/films-page/films-page'

jss.use(plugin())
const filmService = new FilmsService()

export const App = () => (
    <>
        <FilmsPage filmsService={filmService} />
        <Footer>
            <Label />
        </Footer>
    </>
)
