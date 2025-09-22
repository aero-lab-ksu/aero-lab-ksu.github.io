import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Research from './pages/Research';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Publications from './pages/Publications';
import PublicationDetail from './pages/PublicationDetail';
import People from './pages/People';
import PersonDetail from './pages/PersonDetail';
import Awards from './pages/Awards';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/publications/:id" element={<PublicationDetail />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/people" element={<People />} />
          <Route path="/people/:id" element={<PersonDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
