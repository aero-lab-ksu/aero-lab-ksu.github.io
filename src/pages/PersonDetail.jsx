import React from 'react';
import { useParams, Link } from 'react-router-dom';
import people from '../data/people.json';

export default function PersonDetail() {
  const { id } = useParams();
  const person = people.find(p => p.id === id);

  if (!person) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-red-600">Person Not Found</h1>
        <Link to="/people" className="text-blue-600 hover:underline">← Back to Team</Link>
      </div>
    );
  }

  const { name, role, photoUrl, linkedin, website } = person;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{name}</h1>
      {role && <p className="text-lg text-gray-600">{role}</p>}

      {photoUrl && (
        <img
          src={photoUrl}
          alt={name}
          className="w-64 h-64 object-cover rounded-full shadow mx-auto"
        />
      )}

      <div className="flex flex-wrap gap-4 justify-center mt-4">
        {linkedin && linkedin.trim() !== '' && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            LinkedIn
          </a>
        )}
        {website && website.trim() !== '' && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
          >
            Personal Website
          </a>
        )}
      </div>

      <div className="text-center">
        <Link to="/people" className="text-sm text-blue-600 hover:underline">← Back to Team</Link>
      </div>
    </div>
  );
}
