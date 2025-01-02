import React from 'react';

export function Loading() {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-4 border-gray-100 border-t-red-600 animate-spin" />
        <div className="mt-4 text-gray-600 font-medium">Laddar...</div>
      </div>
    </div>
  );
}