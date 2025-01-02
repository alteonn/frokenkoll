import React from 'react';

interface GDPRSection {
  title: string;
  content: string | string[];
}

const gdprSections: GDPRSection[] = [
  {
    title: "Vad är GDPR?",
    content: [
      "GDPR (General Data Protection Regulation) är EU:s dataskyddsförordning som skyddar dina personuppgifter.",
      "Lagen ger dig kontroll över hur dina personuppgifter samlas in och används.",
      "Alla företag och organisationer som hanterar personuppgifter måste följa GDPR."
    ]
  },
  {
    title: "Dina rättigheter enligt GDPR",
    content: [
      "Rätt till information om hur dina personuppgifter behandlas",
      "Rätt till tillgång till dina personuppgifter",
      "Rätt till rättelse av felaktiga personuppgifter",
      'Rätt till radering ("rätten att bli glömd")',
      "Rätt till begränsning av behandling",
      "Rätt till dataportabilitet",
      "Rätt att göra invändningar",
      "Rätt att inte bli föremål för automatiserat beslutsfattande"
    ]
  },
  {
    title: "Hur vi hjälper dig",
    content: [
      "Vi guidar dig genom processen att ta bort personuppgifter från olika webbplatser.",
      "Vi förklarar hur du kan utöva dina rättigheter enligt GDPR.",
      "Vi tillhandahåller mallar för att kontakta företag och begära borttagning.",
      "Vi informerar om dina rättigheter och hur du kan skydda din integritet."
    ]
  },
  {
    title: "Begära borttagning",
    content: [
      "Du har rätt att begära att dina personuppgifter tas bort från webbplatser.",
      "Företag måste behandla din begäran inom en månad.",
      "Om begäran avslås måste företaget motivera varför.",
      "Du kan överklaga ett avslag till Integritetsskyddsmyndigheten (IMY)."
    ]
  },
  {
    title: "Undantag från rätten till radering",
    content: [
      "Yttrandefrihet och informationsfrihet",
      "Rättsliga förpliktelser som kräver behandling",
      "Skäl som rör allmänt intresse",
      "Arkivändamål av allmänt intresse",
      "Fastställande, utövande eller försvar av rättsliga anspråk"
    ]
  },
  {
    title: "Kontakta tillsynsmyndigheten",
    content: [
      "Om ett företag inte respekterar dina rättigheter kan du klaga till Integritetsskyddsmyndigheten (IMY).",
      "IMY är Sveriges tillsynsmyndighet för dataskyddsfrågor.",
      "Du kan lämna klagomål via IMY:s webbplats: www.imy.se"
    ]
  },
  {
    title: "Mer information",
    content: "För mer information om GDPR och dina rättigheter, besök Integritetsskyddsmyndighetens webbplats eller kontakta oss på hej@frokenkoll.se"
  }
];

export function Content() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-12">
          {gdprSections.map((section) => (
            <div 
              key={section.title}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h2 className="text-2xl font-serif text-gray-900 mb-4">
                {section.title}
              </h2>
              {Array.isArray(section.content) ? (
                <ul className="space-y-3">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-600">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 leading-relaxed">
                  {section.content}
                </p>
              )}
            </div>
          ))}

          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="text-sm text-gray-500">
              Senast uppdaterad: {new Date().toLocaleDateString('sv-SE')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}