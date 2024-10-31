/* eslint-disable react/prop-types */
import { Component, ErrorInfo, ReactElement } from 'react'

interface ErrorBoundaryProps {
    children: ReactElement
    errorComponent?: ReactElement
}

class ErrorBoundary extends Component<ErrorBoundaryProps> {
    state = { hasError: false }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.error('An error occurred:', error, info)
    }

    render() {
        if (this.state.hasError) {
            if (this.state){
                return this.props.errorComponent
            }
            return <h2>An error occurred, please try again later.</h2>
        }
        return this.props.children
    }
}

export default ErrorBoundary
