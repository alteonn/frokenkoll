import React from 'react';
import { faqItems } from './faq-items';

export function FAQList() {
  return (
    <div className="grid gap-6 md:gap-8 animate-fade-in [animation-delay:0.4s] opacity-0">
      {faqItems.map((item, index) => (
        <details
          key={index}
          className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
            <h3 className="text-xl font-medium text-gray-900 pr-8 group-hover:text-red-900 transition-colors duration-300">
              {item.question}
            </h3>
            <div className="flex-shrink-0 ml-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-50 group-hover:bg-red-50 transition-colors duration-300">
                <svg
                  className="w-5 h-5 text-gray-600 group-hover:text-red-600 transition-colors duration-300 transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </summary>
          <div className="px-6 pb-6">
            <div className="h-px w-full bg-gray-100 mb-6" />
            <div className="prose prose-lg text-gray-600">
              {item.answer}
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}