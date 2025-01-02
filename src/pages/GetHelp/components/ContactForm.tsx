import React from 'react';
import { Mail } from 'lucide-react';

export function ContactForm() {
  const emailTemplate = `Förnamn:
Efternamn:
Personnummer (6 första siffror):
Adress:
Postnummer:
Ort:

Länkar du vill ta bort:
Länk 1:
Länk 2:
Länk 3:
Länk 4:
Länk 5:
Länk 6:
Länk 7:
Länk 8:
Länk 9:
Länk 10:

Vi kommer att skicka dig en betallänk via Stripe. Du kan betala säkert via kort, Apple Pay eller Google Pay. När betalningen är gjord påbörjar vi arbetet!

Vi har lång erfarenhet av att hjälpa privatpersoner att ta bort oönskade länkar från Google. Även om vi aldrig kan garantera ett resultat, har vi en hög framgångsgrad och kan ofta hjälpa till att skynda på processen.

Med vänliga hälsningar Frökenkoll`;

  const handleClick = () => {
    const mailtoLink = `mailto:hej@frokenkoll.se?subject=${encodeURIComponent('Jag vill ha hjälp med att ta bort länkar')}&body=${encodeURIComponent(emailTemplate)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <div className="inline-flex mb-4">
              <div className="bg-red-50 p-3 rounded-xl">
                <Mail className="w-6 h-6 text-red-600" />
              </div>
            </div>
            <h2 className="text-2xl font-serif text-gray-900 mb-2">
              Kontakta oss
            </h2>
            <p className="text-gray-600">
              Beskriv ditt ärende så återkommer vi med information om hur vi kan hjälpa dig.
            </p>
          </div>

          <button
            onClick={handleClick}
            className="w-full bg-gray-900 text-white text-center px-6 py-3 rounded-xl hover:bg-red-600 transition-colors font-medium"
          >
            Skicka e-post
          </button>

          <div className="mt-6 text-center text-sm text-gray-500">
            Vi svarar normalt inom 24 timmar på vardagar
          </div>
        </div>
      </div>
    </section>
  );
}