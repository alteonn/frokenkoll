import React from 'react';

export function BackgroundEffects() {
  return (
    <>
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top right blob */}
        <div className="absolute -top-48 -right-48 w-96 h-96">
          <div className="absolute inset-0 bg-red-50 rounded-full blur-3xl opacity-20 animate-float-slow" />
        </div>
        
        {/* Bottom left blob */}
        <div className="absolute -bottom-48 -left-48 w-96 h-96">
          <div className="absolute inset-0 bg-gray-100 rounded-full blur-3xl opacity-30 animate-float-reverse" />
        </div>
      </div>
    </>
  );
}