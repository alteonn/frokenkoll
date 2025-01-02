import React from 'react';

export function Title() {
  return (
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gray-900 tracking-tight leading-[1.1]">
      <span className="inline-block transform hover:scale-[1.02] transition-transform duration-300">
        Dölj dina personliga
      </span>{' '}
      <span className="inline-block transform hover:scale-[1.02] transition-transform duration-300">
        uppgifter online
      </span>
    </h1>
  );
}