import React from 'react';
import { ImWarning } from 'react-icons/im';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center p-8 border rounded">
        <span><ImWarning className='text-red-600 text-center w-full pb-2 text-6xl'/></span>
        <h1 className="text-4xl font-bold mb-4 text-red-600">404 Not Found</h1>
        <p className="text-lg mb-6">The page you are looking for does not exist.</p>
        <Link to="/" className="inline-block px-6 py-3 border border-red-500 text-red-500 font-medium rounded-md hover:border-blue-600">
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;