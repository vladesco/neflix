import React from 'react'
import { Provider } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { Label } from './components/atoms'
import { Footer } from './components/organisms'
import { FilmsPage, NotFoundPage } from './components/pages'

import './global.styles.scss'
import { ApplicationStore } from './store'

type props = {
    store: ApplicationStore
    Router: React.ComponentType<AnyObject & { location?: string }>
    location?: string
}

export const App: React.FC<props> = ({ Router, location, store }) => (
    <Router location={location}>
        <Provider store={store}>
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
        </Provider>
    </Router>
)
