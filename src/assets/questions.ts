type Question = {
  id: string;
  prompt: string;
  options: string[];
  answerIndex: number;
  playerChoiceIndex: number | undefined;
};

export const questions: Question[] = [
  {
    id: crypto.randomUUID(),
    prompt:
      'Ifølge reklamen gir dette egget deg tre ting/"overraskelser" på en gang, personlig synes jeg man bare får to:',
    options: [
      "Anton Berg marsipanegg",
      "Kinderegg",
      "Pytonslange-egg",
      "Freia påskeegg",
    ],
    answerIndex: 1,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt:
      "Hva kalles systemet for å måle renheten i gull ved å dele det inn i 24 deler?",
    options: ["Karat", "Mint", "Troy", "Damaskus"],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "I hvilken liga spiller fotballaget til HØDD IL?",
    options: [
      "Eliteserien (1. divisjon)",
      "OBOS-ligaen (2. divisjon)",
      "PostNord-ligaen (3. divisjon)",
      "4. divisjon",
    ],
    answerIndex: 1,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvordan skriver man tallet 30 med romertall?",
    options: ["III", "LX", "XXX", "VVV"],
    answerIndex: 2,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvor mange ganger er Mette Marit nevnt i Epsteinfilene?",
    options: [
      "«Det e privad»",
      "«Det husker æ ikkje. Hallo.. det e fæmden år sida.»",
      "Ca. 1000 ganger",
      "«Det har vært en vældig krævanes tid for mæ.»",
    ],
    answerIndex: 2,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt:
      "Hvem har scoret flest mål for Manchester City til nå i Premier League 25/26-sesongen?",
    options: [
      "Phil Foden",
      "Erling Haaland",
      "Alan Shearer",
      "Tijjani Reijnders",
    ],
    answerIndex: 1,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvilken av følgende er IKKE et legemiddelfirma?",
    options: ["AstraZeneca", "Intel", "Pfizer", "Novartis"],
    answerIndex: 1,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: 'Hva er "sillage" når man snakker om parfymer?',
    options: [
      "Den første lukten man kjenner når man påfører parfymen",
      "Hvor stor del av parfymen som trekker seg inn i huden",
      "Prosessen med å blande parfymeolje og alkohol",
      "Lukten som er igjen i rommet etter at bæreren har forlatt",
    ],
    answerIndex: 3,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvilken fast food-kjede er kjent for sine Whopper-burgere?",
    options: ["McDonald's", "Max", "Jafs", "Burger King"],
    answerIndex: 3,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hva er den nyeste iPhone-modellen?",
    options: ["iPhone 15", "iPhone 16", "iPhone 17", "iPhone 18"],
    answerIndex: 2,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt:
      "Hvilken bilprodusent lager modellene Corolla, Camry og Land Cruiser?",
    options: ["Honda", "Nissan", "Hyundai", "Toyota"],
    answerIndex: 3,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvem synger de høyeste notene i et kor?",
    options: ["Bass", "Tenor", "Alto", "Sopran"],
    answerIndex: 3,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hva mangler kroppen ved Diabetes type 1?",
    options: ["Glukagon", "Kortisol", "Insulin", "Adrenalin"],
    answerIndex: 2,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvem spilte Aragorn i Ringenes Herre-trilogien (2001–2003)?",
    options: [
      "Mads Mikkelsen",
      "Viggo Mortensen",
      "Samuel L. Jackson",
      "Liam Neeson",
    ],
    answerIndex: 1,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvilken fiskeart dominerer norsk oppdrettsnæring?",
    options: ["Torsk", "Ørret", "Kveite", "Atlantisk laks"],
    answerIndex: 3,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Eggehvite består hovedsakelig av vann og...",
    options: ["Proteiner", "Karbohydrater", "Fett", "Mineraler"],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hva er hovedstaden i Latvia?",
    options: ["Kaunas", "Vilnius", "Riga", "Tallinn"],
    answerIndex: 2,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt:
      "Hva er hovedoppgaven til Jegerbataljonen ved Garnisonen i Sør-Varanger (GSV)?",
    options: [
      "Sikre grensen mot Russland",
      "Kommandosentral for norske ubåter",
      "Trene internasjonale soldater",
      "Sikre olje- og gassinstallasjoner",
    ],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvem er kjent som ambient-sjangerens far?",
    options: ["Brian Eno", "Jean-Michel Jarre", "Kraftwerk", "Röyksopp"],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt:
      "Hvis man er redd for påskekyllinger og fugler generelt, hvilken fobi har man da?",
    options: ["Ornitofobi", "Araknofobi", "Agorafobi", "Talassofobi"],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
];
