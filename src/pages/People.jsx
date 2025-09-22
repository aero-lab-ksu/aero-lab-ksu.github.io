import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import people from '../data/people.json';

export default function People() {
  const [search, setSearch] = useState('');

  const filtered = people.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-2">Our Team</h1>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full max-w-sm px-4 py-2 border rounded"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map(person => (
          <Link
            to={`/people/${person.id}`}
            key={person.id}
            className="border rounded-lg shadow hover:shadow-md overflow-hidden"
          >
            {person.photoUrl && (
              <img
                src={person.photoUrl}
                alt={person.name}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-lg font-semibold">{person.name}</h2>
              <p className="text-gray-600">{person.role}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
