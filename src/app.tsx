import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Label } from './components/atoms'
import { Footer } from './components/organisms'
import { FilmsPage, NotFoundPage } from './components/pages'

import './global.styles.scss'

export const App = () => (
    <Switch>
        <Route
            path={['/', '/search/:query', '/film/:id']}
            exact={true}
            component={FilmsPage}
        ></Route>
        <Route path="**" component={NotFoundPage}></Route>
        <Footer>
            <Label />
        </Footer>
    </Switch>
)
