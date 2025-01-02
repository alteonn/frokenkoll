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
        
        {/* Center decorative elements */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
    </>
  );
}