import React from 'react'
import jss from 'jss'
import plugin from 'jss-plugin-extend'
import { Footer } from './components/footer/footer'
import { Label } from './shared/components/label/label'
import { FilmsService } from './shared/services/films.service'
import { Films } from './components/films/films'

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
