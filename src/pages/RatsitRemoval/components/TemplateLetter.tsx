import React from 'react';
import { Copy, Check } from 'lucide-react';

export function TemplateLetter() {
  const [copied, setCopied] = React.useState(false);
  
  const template = `[Namn och adress till den personuppgiftsansvariga]
[Namn och adress och/eller andra kontaktuppgifter till dig]
[Datum]

Hej!
Jag vill härmed utöva min rätt till radering med stöd av artikel 17 i dataskyddsförordningen.
[Skriv vilka personuppgifter du vill ska raderas]

Ni kan hitta information om era skyldigheter som personuppgiftsansvarig på Integritetsskyddsmyndighetens webbplats (www.imy.se).

Jag ser fram emot ert svar på min begäran om radering så snart som möjligt, senast inom en månad.

Ni får gärna kontakta mig om ni har några frågor.
Med vänliga hälsningar
[Namn]`;

  const copyTemplate = async () => {
    try {
      await navigator.clipboard.writeText(template);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif text-gray-900 mb-8">Brevmall från IMY</h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg relative">
            <button
              onClick={copyTemplate}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-red-600 transition-colors"
              title="Kopiera mall"
            >
              {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            </button>
            
            <pre className="whitespace-pre-wrap font-mono text-sm text-gray-700 leading-relaxed">
              {template}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}