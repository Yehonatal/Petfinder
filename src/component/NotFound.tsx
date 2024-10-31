import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-6xl font-extrabold text-gray-800">404</h1>
            <h2 className="mt-4 text-2xl font-semibold text-gray-600">Page Not Found</h2>
            <p className="mt-2 text-lg text-gray-500">
                Sorry, the page you are looking for does not exist.
            </p>
            <Link
                to="/"
                className="mt-6 inline-block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                Go to Home
            </Link>
        </div>
    );
}

export default NotFound;
