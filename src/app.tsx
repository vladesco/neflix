import React from 'react'
import jss from 'jss'
import plugin from 'jss-plugin-extend'
import { Footer, Films } from './components'
import { Label } from './shared/components'
import { FilmsService } from './shared/services/films.service'

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
