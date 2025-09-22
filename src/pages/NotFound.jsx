import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center py-16">
      <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">Page Not Found</p>
      <Link to="/" className="text-blue-600 hover:underline text-lg">
        ← Back to Home
      </Link>
    </div>
  );
}
