import React from 'react'
import jss from 'jss'
import plugin from 'jss-plugin-extend'
import { FilmsService } from './shared/services/films.service'
import { Label } from './components/atoms'
import { Footer } from './components/organisms'
import { Films } from './components/pages/films/films'

jss.use(plugin())
const filmService = new FilmsService()

export const App = () => (
    <>
        <Films filmsService={filmService} />
        <Footer>
            <Label />
        </Footer>
    </>
)
