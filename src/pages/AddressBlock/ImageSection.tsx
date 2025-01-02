import React from 'react';

export function ImageSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <img
            src="https://res.cloudinary.com/acasting-prod/image/upload/v1735763357/blog-articles/hkri1wdxiyg3kkevgg4d.png"
            alt="Spärra adressändring illustration"
            className="w-full h-auto rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}