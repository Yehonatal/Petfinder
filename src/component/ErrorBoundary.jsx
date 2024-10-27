/* eslint-disable react/prop-types */
import { Component } from "react";

class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("An error occurred:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return this.props.errorComponent;
        }
        return this.props.children; // The children coming into this component just pass through like nothing happened
    }
}

export default ErrorBoundary;
