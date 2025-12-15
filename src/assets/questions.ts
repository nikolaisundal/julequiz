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
    prompt: "Hvilken stor fugl har en pung under nebbet hvor den lagrer fisk?",
    options: ["Pelikan", "Stork", "Hegre", "Albatross"],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt:
      "Hva kaller man et fly som ikke går i rute, men som er leid inn for minst 10 passasjerer?",
    options: ["Propellfly", "Charterfly", "Cessnafly", "Minifly"],
    answerIndex: 1,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Fra hvilket land kommer mojito?",
    options: ["Cuba", "Mexico", "Spania", "Brasil"],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt:
      'Tv-serien "Breaking Bad" tar plass i denne byen i New Mexico, men hvordan staves navnet?',
    options: ["Albuquerke", "Albuaquerquy", "Albuquerque", "Albequerque"],
    answerIndex: 2,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt:
      "Han er en kjekkas, men hvordan faen staver man etternavnet hans? Matthew..",
    options: ["McConahey", "McConaughey", "McConaughay", "McConnagy"],
    answerIndex: 1,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt:
      'På nittitallet var Egil "Drillo" Olsen ofte iført sine "pæler", hva var de?',
    options: ["Gummistøvler", "Øredobber", "Votter", "Knesokker"],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvem skrev Bokhandleren i Kabul?",
    options: [
      "Anne B. Ragde",
      "Åsne Seierstad",
      "Maja Lunde",
      "Camilla Kotelett",
    ],
    answerIndex: 1,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt:
      "Det er populært med jul på hytta, men hvor i landet er det flest hytter?",
    options: ["Trøndelag", "Møre og Romsdal", "Nordland", "Innlandet"],
    answerIndex: 3,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hva er det spanske ordet for hus?",
    options: ["Casa", "Maison", "Mesa", "Leche"],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "I hvilket land er Emmanuel Macron president?",
    options: ["Frankrike", "Spania", "Italia", "Tyskland"],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hva heter den kjente røde broen i San Francisco?",
    options: [
      "Portal of Happiness",
      "Golden Gate Bridge",
      "Bridge Over Troubled Water",
      "Tower Bridge",
    ],
    answerIndex: 1,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt:
      "Hvilket land er omkranset av Østerrike, Tyskland, Frankrike og Italia?",
    options: ["Sveits", "Slovenia", "Luxemburg", "Tsjekkia"],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt:
      "Hvor mange grader av en sirkel utgjør strekningen mellom tallene fire og ti på en urskive?",
    options: ["90", "270", "180", "45"],
    answerIndex: 2,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Fra hvilken by kommer John Arne Riise?",
    options: ["Ålesund", "Molde", "Hovdebygda", "Tromsø"],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt:
      "Hvilken haiart blir ikke seksuelt aktiv før 150 årsalderen og regnes som en delikatesse på Island?",
    options: ["Tigerhai", "Håkjerring", "Pigghå", "Hammerhai"],
    answerIndex: 1,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt:
      "Hva heter den røde tomatbaserte sausen vi forbinder med meksikansk mat?",
    options: ["Bolognese", "Salsa", "Ajvar", "Guacamole"],
    answerIndex: 1,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt:
      'Hvem sa: "My mama always said life was like a box of chocolates, you never know what you\'re gonna get"?',
    options: [
      "Forrest Gump",
      "Donald Trump",
      "Forrest Whitaker",
      "Arve Tellefsen",
    ],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Når skjedde unionsoppløsningen mellom Norge og Sverige?",
    options: ["1814", "1881", "1905", "1945"],
    answerIndex: 2,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvem fant opp blindeskriften?",
    options: [
      "Louis Braille",
      "Samuel Morse",
      "Ferdinand Magellan",
      "Snorre Vikdal",
    ],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvilken historisk person er julenissen basert på?",
    options: ["Nick Carter", "Pave Julius", "Bodvar Brå", "Sankt Nikolaus"],
    answerIndex: 3,
    playerChoiceIndex: undefined,
  },
];
