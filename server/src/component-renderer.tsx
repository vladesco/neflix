import React from 'react'
import { Store } from 'redux'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import { JssProvider, SheetsRegistry } from 'react-jss'
import { App } from '../../client/src/app'
import { createStore, State } from '../../client/src/store'

class ComponentRenderer {
    private _componentCss: SheetsRegistry
    private _componentMarkup: string
    private _componentLocation: string
    private _store: Store

    constructor(
        private _component: React.ComponentType<{
            store: Store
            Router: React.ComponentType
            location?: string
        }>
    ) {
        this.setupInitialState()
    }

    get componentMarkup(): string {
        return this._componentMarkup
    }

    get componentCss(): string {
        return this._componentCss.toString()
    }

    get componentState(): State {
        return this._store.getState()
    }

    public setComponentLocation(location: string): void {
        this._componentLocation = location
    }

    public clearComponent(): void {
        this.setupInitialState()
    }

    public renderComponent(): void {
        const Component = this._component

        this._componentMarkup = renderToString(
            <JssProvider registry={this._componentCss}>
                <Component
                    Router={StaticRouter}
                    location={this._componentLocation}
                    store={this._store}
                />
            </JssProvider>
        )
    }

    private setupInitialState() {
        this._componentCss = this.createCssSheet()
        this._store = this.createStore()
        this._componentLocation = ''
        this._componentLocation = ''
    }

    private createStore(): Store {
        return createStore()
    }

    private createCssSheet(): SheetsRegistry {
        return new SheetsRegistry()
    }
}

export const renderer = new ComponentRenderer(App)
