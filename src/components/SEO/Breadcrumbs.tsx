import React from 'react';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbsProps {
  items: Array<{
    label: string;
    path: string;
  }>;
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@id": `https://frokenkoll.se${item.path}`,
        "name": item.label
      }
    }))
  };

  return (
    <>
      <nav className="text-sm text-gray-500 mb-8">
        <ol className="flex items-center space-x-2">
          {items.map((item, index) => (
            <React.Fragment key={item.path}>
              {index > 0 && <ChevronRight className="w-4 h-4" />}
              <li>
                <a 
                  href={item.path}
                  className="hover:text-red-600 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, '', item.path);
                    window.dispatchEvent(new PopStateEvent('popstate'));
                  }}
                >
                  {item.label}
                </a>
              </li>
            </React.Fragment>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}