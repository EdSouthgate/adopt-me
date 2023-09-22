import {Component} from 'react';
import {Link} from 'react-router-dom';

class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Typically you would log this error to something like Track js
        console.error("ErrorBoundary component caught an error", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <p>
                        <Link to="/">Return to Home Page</Link>
                    </p>
                </div>
            );
        }

        return this.props.children;
    }

}

export default ErrorBoundary;

