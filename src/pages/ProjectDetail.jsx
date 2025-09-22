import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from '../data/projects.json';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-red-600">Project Not Found</h1>
        <Link to="/projects" className="text-blue-600 hover:underline">← Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{project.title}</h1>

      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full max-w-2xl mx-auto rounded shadow"
        />
      )}

      <p className="text-gray-700">{project.description}</p>

      {project.link && project.link.trim() !== '' && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-600 hover:underline"
        >
          🔗 Project Link
        </a>
      )}

      <div>
        <Link to="/projects" className="text-sm text-blue-600 hover:underline">← Back to Projects</Link>
      </div>
    </div>
  );
}
