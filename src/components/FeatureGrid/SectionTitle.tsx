import React from 'react';

interface SectionTitleProps {
  title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 tracking-tight">
        {title}
      </h2>
    </div>
  );
}