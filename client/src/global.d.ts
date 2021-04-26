import { State } from './store'

declare global {
    var STATE: State

    type AnyObject = { [key: string]: any }
}
