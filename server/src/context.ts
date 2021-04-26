const nodeFetch = require('node-fetch').default

class ContextManager {
    private _callInfo = new Map()

    public applyContext<T>(fn: (...args: any[]) => T): () => T {
        this._callInfo.set(fn, { pendingPromises: [] })

        return (...args) => this.runFunctionInContext<T>(fn, args)
    }

    public getCallInfo(fn: Function) {
        return this._callInfo.get(fn)
    }

    private runFunctionInContext<T>(fn: (...args: any[]) => T, args): T {
        this.setupContext(this._callInfo.get(fn))
        const result = fn(...args)
        this.cleareContext()

        return result
    }

    private setupContext(context): void {
        global.fetch = (...args) => {
            const pendingPromise = nodeFetch(...args)
            context.pendingPromises.push(pendingPromise)

            return pendingPromise
        }
    }

    private cleareContext(): void {
        delete global.fetch
    }
}

exports.contextManager = new ContextManager()
