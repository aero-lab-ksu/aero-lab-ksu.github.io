import React from 'react';
import { useParams, Link } from 'react-router-dom';
import publications from '../data/publications.json';

export default function PublicationDetail() {
  const { id } = useParams();
  const pub = publications.find(p => p.id === id);

  if (!pub) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-red-600">Publication Not Found</h1>
        <Link to="/publications" className="text-blue-600 hover:underline">← Back to Publications</Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{pub.title}</h1>

      {pub.image && (
        <img
          src={pub.image}
          alt={pub.title}
          className="w-full max-w-2xl mx-auto rounded shadow"
        />
      )}

      {pub.authors && (
        <p className="text-gray-700 font-medium">Authors: {pub.authors.join(', ')}</p>
      )}

      {pub.journal && <p className="italic text-gray-500">{pub.journal}</p>}

      <p className="text-gray-600">Published: {pub.year}</p>

      {pub.url && pub.url.trim() !== '' && (
        <a
          href={pub.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-600 hover:underline"
        >
          🔗 View Publication
        </a>
      )}

      <div>
        <Link to="/publications" className="text-sm text-blue-600 hover:underline">← Back to Publications</Link>
      </div>
    </div>
  );
}
