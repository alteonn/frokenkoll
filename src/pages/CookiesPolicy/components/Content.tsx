import React from 'react';

interface CookieSection {
  title: string;
  content: string | string[];
}

const cookieSections: CookieSection[] = [
  {
    title: "Vad är cookies?",
    content: [
      "Cookies är små textfiler som lagras på din enhet när du besöker en webbplats.",
      "De hjälper webbplatsen att komma ihåg dina inställningar och förbättra din upplevelse.",
      "Cookies kan vara tillfälliga (sessionscookies) eller permanenta (persistenta cookies)."
    ]
  },
  {
    title: "Hur vi använder cookies",
    content: [
      "Vi använder endast nödvändiga cookies som krävs för webbplatsens grundläggande funktioner.",
      "Vi använder för närvarande inga cookies för analys eller marknadsföring.",
      "Vi samlar inte in någon personlig information genom cookies."
    ]
  },
  {
    title: "Nödvändiga cookies",
    content: [
      "Dessa cookies är essentiella för att webbplatsen ska fungera korrekt.",
      "De används för att hantera sidnavigering och grundläggande funktionalitet.",
      "Du kan inte välja bort dessa cookies eftersom webbplatsen då inte skulle fungera korrekt."
    ]
  },
  {
    title: "Framtida användning",
    content: [
      "Vi kan i framtiden komma att implementera cookies för analys och förbättrad användarupplevelse.",
      "Om vi börjar använda ytterligare cookies kommer vi att uppdatera denna policy.",
      "Du kommer alltid att ha möjlighet att välja bort icke-nödvändiga cookies."
    ]
  },
  {
    title: "Hantera cookies",
    content: [
      "Du kan kontrollera och/eller radera cookies som du vill.",
      "Du kan radera alla cookies som finns på din dator och du kan ställa in webbläsaren för att förhindra att de placeras ut.",
      "Observera att om du avaktiverar cookies kan det påverka funktionaliteten på denna och andra webbplatser."
    ]
  },
  {
    title: "Tredjepartscookies",
    content: [
      "Vi använder för närvarande inga tredjepartscookies.",
      "Om vi i framtiden implementerar tredjepartscookies kommer vi att tydligt informera om detta.",
      "Du kommer alltid att ha möjlighet att välja bort tredjepartscookies."
    ]
  },
  {
    title: "Kontakta oss",
    content: "Om du har frågor om hur vi använder cookies, kontakta oss på hej@frokenkoll.se"
  }
];

export function Content() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-12">
          {cookieSections.map((section) => (
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