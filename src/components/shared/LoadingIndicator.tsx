import React from 'react';

export function LoadingIndicator() {
  return (
    <div 
      role="status"
      aria-label="Laddar innehåll"
      className="flex items-center justify-center p-4"
    >
      <div className="w-8 h-8 border-4 border-gray-200 border-t-red-600 rounded-full animate-spin" />
      <span className="sr-only">Laddar...</span>
    </div>
  );
}