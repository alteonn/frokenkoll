import React from 'react';
import { CheckCircle, Clock, Shield, AlertTriangle, HelpingHand } from 'lucide-react';

const features = [
  {
    icon: CheckCircle,
    title: "90% framgångsgrad",
    description: "I 9 av 10 fall lyckas vi få bort oönskade länkar från Google."
  },
  {
    icon: Clock,
    title: "Snabb hantering",
    description: "Vi påbörjar arbetet direkt och håller dig uppdaterad genom hela processen."
  },
  {
    icon: Shield,
    title: "Säker process",
    description: "Vi använder beprövade metoder och följer alla juridiska riktlinjer."
  }
];

export function Content() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Important Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-12">
            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-2 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-amber-700" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-amber-900 mb-2">
                  Testa våra guider först
                </h3>
                <p className="text-amber-800">
                  Vi rekommenderar att du först testar att följa våra kostnadsfria guider för att ta bort dina uppgifter. 
                  Med lite tålamod och tid kan du göra detta själv utan kostnad. Om du har försökt men inte lyckats eller behöver akut hjälp, kan vi assistera dig.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-gray-900 mb-4">
              Professionell hjälp när du behöver det
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Vi har lång erfarenhet av att hjälpa privatpersoner att ta bort oönskade länkar från Google. 
              Även om vi aldrig kan garantera ett resultat, har vi en hög framgångsgrad och kan ofta hjälpa till att skynda på processen.
            </p>
            
            {/* Price info */}
            <div className="bg-red-50 rounded-xl p-6 inline-block">
              <div className="flex items-center justify-center space-x-3 text-red-900">
                <HelpingHand className="w-5 h-5" />
                <span className="font-medium">Engångskostnad: 299 kr</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-red-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-medium text-gray-900 mb-4">
              När ska du överväga vår hjälp?
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Du har försökt själv men inte lyckats ta bort länkarna</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Du behöver akut hjälp med att få bort känslig information</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Du har inte tid eller ork att hantera processen själv</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Du vill ha professionell hjälp för att säkerställa att det görs korrekt</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}