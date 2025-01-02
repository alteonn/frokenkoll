import React from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="text-lg font-medium text-gray-900">Logo</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-sm text-gray-600 hover:text-red-600 transition-colors">Kontakta oss</a>
          <a href="#" className="text-sm text-gray-600 hover:text-red-600 transition-colors">Om oss</a>
          <button className="text-sm bg-black text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
            Kom igång
          </button>
        </div>

        {/* Mobile Navigation */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:text-red-600 transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 inset-x-0 bg-white border-b border-gray-100 p-4 md:hidden">
          <div className="space-y-4">
            <a href="#" className="block text-sm text-gray-600 hover:text-red-600 transition-colors">Kontakta oss</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-red-600 transition-colors">Om oss</a>
          </div>
        </div>
      )}
    </nav>
  );
}