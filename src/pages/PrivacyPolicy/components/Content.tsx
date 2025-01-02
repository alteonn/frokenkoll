import React from 'react';

interface PolicySection {
  title: string;
  content: string | string[];
}

const policySections: PolicySection[] = [
  {
    title: "Om Frökenkoll",
    content: "Frökenkoll är en kostnadsfri tjänst som hjälper privatpersoner att ta kontroll över sina personuppgifter online. Vi tillhandahåller guider och information om hur du kan skydda din integritet på internet."
  },
  {
    title: "Insamling av information",
    content: [
      "Vi samlar inte in eller lagrar några personuppgifter från våra besökare.",
      "Vår webbplats är helt informativ och kräver ingen registrering eller inloggning.",
      "Vi använder endast nödvändiga cookies för webbplatsens funktionalitet."
    ]
  },
  {
    title: "Framtida utveckling",
    content: [
      "Vi kan i framtiden komma att implementera analysfunktioner för att förbättra användarupplevelsen.",
      "Vi kan komma att införa annonser för att finansiera och vidareutveckla tjänsten.",
      "Om detta sker kommer vi att uppdatera denna policy med relevant information."
    ]
  },
  {
    title: "Externa länkar",
    content: [
      "Vår webbplats innehåller länkar till externa webbplatser som upplysningssajter och myndighetstjänster.",
      "Vi ansvarar inte för hur dessa webbplatser hanterar dina personuppgifter.",
      "Vi rekommenderar att du läser integritetspolicyn på respektive webbplats."
    ]
  },
  {
    title: "Säkerhet",
    content: [
      "Vi tar säkerheten på största allvar och använder moderna säkerhetstekniker.",
      "Eftersom vi inte samlar in några personuppgifter finns det ingen känslig information lagrad hos oss."
    ]
  },
  {
    title: "Ändringar i policyn",
    content: [
      "Vi förbehåller oss rätten att uppdatera denna integritetspolicy när det behövs.",
      "Större ändringar kommer att kommuniceras tydligt på webbplatsen."
    ]
  },
  {
    title: "Kontakta oss",
    content: "Om du har frågor om vår integritetspolicy eller hur vi hanterar information på webbplatsen, kontakta oss på hej@frokenkoll.se"
  }
];

export function Content() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-12">
          {policySections.map((section, index) => (
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