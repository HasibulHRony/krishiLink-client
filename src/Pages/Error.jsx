import React from "react";
import { Link } from "react-router";

export const Error = () => {
   

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
            <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
            <h2 className="text-3xl font-semibold mb-2">Oops! Page Not Found</h2>
            <p className="text-gray-600 mb-6">
                The page you are looking for doesn’t exist or an unexpected error has occurred.
            </p>

            <Link
                to="/"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
            >
                Back to Home
            </Link>
        </div>
    );
};

