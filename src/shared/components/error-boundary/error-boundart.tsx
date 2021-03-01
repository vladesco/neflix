import React, { ErrorInfo } from 'react'

export class ErrorBoundary extends React.Component<
    React.PropsWithChildren<void>,
    { errors: string[] }
> {
    constructor(props: React.PropsWithChildren<void>) {
        super(props)
        this.state = { errors: [] }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState(({ errors }) => ({
            errors: [...errors, error.message],
        }))
    }

    render() {
        return (
            <>
                {this.state.errors.map((error) => (
                    <span
                        onClick={() =>
                            this.setState(({ errors }) => ({
                                errors: errors.filter(
                                    (errorMessage) => errorMessage !== error
                                ),
                            }))
                        }
                    >
                        {error}
                    </span>
                ))}

                {this.props.children}
            </>
        )
    }
}
