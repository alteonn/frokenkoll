export const generateFAQSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const commonFAQs = [
  {
    question: "Är det gratis att använda Frökenkoll?",
    answer: "Ja, alla våra guider och instruktioner är helt kostnadsfria."
  },
  {
    question: "Hur lång tid tar det att ta bort personuppgifter?",
    answer: "Tiden varierar mellan olika tjänster. Med BankID går det ofta direkt, medan manuell hantering kan ta 1-4 veckor."
  },
  {
    question: "Kan man ta bort alla personuppgifter från internet?",
    answer: "Det går att dölja mycket information men vissa uppgifter, som offentliga register, kan vara svårare att dölja helt."
  }
];