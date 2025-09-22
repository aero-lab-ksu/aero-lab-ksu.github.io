import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects.json';

export default function Projects() {
  const [search, setSearch] = useState('');

  const filtered = projects.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-2">Projects</h1>

      <input
        type="text"
        placeholder="Search projects..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full max-w-sm px-4 py-2 border rounded"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map(project => (
          <Link
            to={`/projects/${project.id}`}
            key={project.id}
            className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
