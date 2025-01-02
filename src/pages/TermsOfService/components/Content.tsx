import React from 'react';

interface TermsSection {
  title: string;
  content: string | string[];
}

const termsSections: TermsSection[] = [
  {
    title: "Tjänstens omfattning",
    content: [
      "Frökenkoll är en kostnadsfri informationstjänst som hjälper privatpersoner att skydda sin integritet online.",
      "Vi tillhandahåller guider och information om hur du kan ta bort eller dölja dina personuppgifter från olika webbplatser.",
      "Vi garanterar inte att informationen alltid är fullständig eller uppdaterad, men vi strävar efter att hålla den aktuell."
    ]
  },
  {
    title: "Kostnadsfri tjänst",
    content: [
      "Frökenkoll är och kommer alltid att vara kostnadsfri för privatpersoner.",
      "Vi kan i framtiden komma att visa annonser på webbplatsen för att finansiera tjänsten.",
      "Vi kommer aldrig att sälja användardata eller personuppgifter."
    ]
  },
  {
    title: "Användning av tjänsten",
    content: [
      "Du får använda vår tjänst för personligt bruk.",
      "Du får inte kopiera eller återanvända vårt material utan tillstånd.",
      "Du ansvarar själv för att följa instruktionerna korrekt.",
      "Vi kan inte garantera resultatet av borttagningsprocesserna då detta beror på tredje part."
    ]
  },
  {
    title: "Ansvarsfriskrivning",
    content: [
      "Vi ansvarar inte för eventuella problem som uppstår vid användning av våra guider.",
      "Vi garanterar inte att tredjepartstjänster kommer att ta bort dina uppgifter.",
      "Vi ansvarar inte för innehåll på externa webbplatser som vi länkar till."
    ]
  },
  {
    title: "Immateriella rättigheter",
    content: [
      "Allt innehåll på Frökenkoll är skyddat av upphovsrätt.",
      "Du får inte kopiera, distribuera eller på annat sätt använda innehållet utan vårt tillstånd.",
      "Vårt varumärke och logotyp får inte användas utan skriftligt godkännande."
    ]
  },
  {
    title: "Framtida ändringar",
    content: [
      "Vi förbehåller oss rätten att när som helst ändra dessa användarvillkor.",
      "Större ändringar kommer att kommuniceras tydligt på webbplatsen.",
      "Genom att fortsätta använda tjänsten efter ändringar godkänner du de nya villkoren."
    ]
  },
  {
    title: "Tillämplig lag",
    content: "Dessa användarvillkor lyder under svensk lag och eventuella tvister ska avgöras i svensk domstol."
  }
];

export function Content() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-12">
          {termsSections.map((section, index) => (
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