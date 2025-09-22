import React from 'react';
import awards from '../data/awards.json';

export default function Awards() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Awards & Honors</h1>

      <div className="space-y-4">
        {awards.map(award => (
          <div
            key={award.id}
            className="border p-4 rounded shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">{award.title}</h2>
            {award.year && (
              <p className="text-sm text-gray-500">Year: {award.year}</p>
            )}
            {award.description && (
              <p className="text-gray-700 mt-2">{award.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
