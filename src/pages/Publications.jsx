import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import publications from '../data/publications.json';

export default function Publications() {
  const [search, setSearch] = useState('');

  const filtered = publications.filter(pub =>
    pub.title.toLowerCase().includes(search.toLowerCase())
  );

  const grouped = filtered.reduce((acc, pub) => {
    acc[pub.year] = acc[pub.year] || [];
    acc[pub.year].push(pub);
    return acc;
  }, {});

  const years = Object.keys(grouped).sort((a, b) => b - a);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-2">Publications</h1>

      <input
        type="text"
        placeholder="Search publications..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full max-w-sm px-4 py-2 border rounded"
      />

      {years.map(year => (
        <div key={year}>
          <h2 className="text-2xl font-semibold mt-6 mb-3">{year}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {grouped[year].map(pub => (
              <Link
                to={`/publications/${pub.id}`}
                key={pub.id}
                className="border rounded-lg p-4 shadow hover:shadow-md transition"
              >
                {pub.image && (
                  <img
                    src={pub.image}
                    alt={pub.title}
                    className="w-full h-40 object-cover mb-3 rounded"
                  />
                )}
                <h3 className="text-lg font-bold">{pub.title}</h3>
                {pub.authors && (
                  <p className="text-gray-600 text-sm">
                    {pub.authors.join(', ')}
                  </p>
                )}
                {pub.journal && (
                  <p className="text-gray-500 text-sm italic">{pub.journal}</p>
                )}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
