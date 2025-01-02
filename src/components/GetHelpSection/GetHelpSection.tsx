import React from 'react';
import { HelpingHand, ArrowRight, AlertTriangle } from 'lucide-react';

export function GetHelpSection() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', '/fa-hjalp');
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/20 rounded-2xl opacity-20 transform rotate-6" />
              <div className="relative bg-red-500/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                <HelpingHand className="w-8 h-8 text-red-400" />
              </div>
            </div>
          </div>

          {/* Content */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight mb-6">
            Behöver du hjälp?
          </h2>

          {/* Recommendation notice */}
          <div className="bg-amber-900/20 border border-amber-500/20 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-center space-x-3 text-amber-300 mb-3">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-medium">Rekommendation</span>
            </div>
            <p className="text-amber-100 leading-relaxed">
              Vi rekommenderar att du först testar våra kostnadsfria guider. Med lite tålamod kan du göra allt själv utan kostnad.
            </p>
          </div>

          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Om du har försökt men inte lyckats eller behöver akut hjälp kan vi assistera dig. Vi har hjälpt hundratals personer och erbjuder professionell hjälp mot en låg engångskostnad på 299 kr.
          </p>

          {/* CTA Button */}
          <a 
            href="/fa-hjalp"
            onClick={handleClick}
            className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-1 group"
          >
            <span className="font-medium">Få hjälp</span>
            <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}