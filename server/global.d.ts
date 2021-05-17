import { State } from '../client/src/store'

declare global {
    var STATE: State

    type AnyObject = { [key: string]: any }
}
