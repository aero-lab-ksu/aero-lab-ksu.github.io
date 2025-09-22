import React from 'react';

export default function PersonCard({ person }) {
  const { name, role, photoUrl, linkedin, website } = person;
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      {photoUrl && (
        <img
          src={photoUrl}
          alt={name}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        {role && <p className="text-gray-600">{role}</p>}
        <div className="mt-4 flex space-x-4">
          {linkedin && linkedin.trim() !== '' && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          )}
          {website && website.trim() !== '' && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
