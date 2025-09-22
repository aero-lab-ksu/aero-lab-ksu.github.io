import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-10 border-t">
      <p className="text-gray-600 text-sm">
        © {new Date().getFullYear()} KSU Aero Lab. All rights reserved.
      </p>
    </footer>
  );
}