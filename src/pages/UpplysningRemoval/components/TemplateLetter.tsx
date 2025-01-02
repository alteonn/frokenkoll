import React from 'react';
import { Copy, Check } from 'lucide-react';

export function TemplateLetter() {
  const [copied, setCopied] = React.useState(false);
  
  const template = `Till: info@upplysning.se
Ämne: Begäran om borttagning av personuppgifter

Hej!

Jag önskar bli borttagen från Upplysning.se.

Min profilsida: [Klistra in webbadressen till din sida här]

Mina uppgifter:
Namn: [Ditt fullständiga namn]
Adress: [Din hemadress]

Jag begär att ni tar bort alla mina personuppgifter från er webbplats i enlighet med artikel 17 i dataskyddsförordningen (GDPR).

Vänliga hälsningar
[Ditt namn]`;

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
          <h2 className="text-3xl font-serif text-gray-900 mb-8">E-postmall</h2>
          
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