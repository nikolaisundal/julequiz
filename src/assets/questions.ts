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
    prompt: "Hva er amaurosis fugax?",
    options: [
      "Man er født uten brunøye",
      "Et forbigående synstap på det ene øyet",
      "Øynene skjeler innover",
      "En brytningsforstyrrelse i hornhinnen",
    ],
    answerIndex: 1,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvem har scoret flest mål for norges håndball-landslag?",
    options: ["Camilla Herrem", "Nora Mørk", "Trine Haltvik", "Kjersti Grini"],
    answerIndex: 3,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt:
      "Hvor går spenningsgrensen for det som regnes som lavspenning i Norge?",
    options: [
      "Under 50V AC eller under 120V DC",
      "Under 230V AC eller under 400V DC",
      "Under 400V AC eller under 600V DC",
      "Under 1000V AC eller under 1500V DC",
    ],
    answerIndex: 3,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvilken av følgende er ikke en by i Syria?",
    options: ["Misurata", "Homs", "Ar Raqqah", "Aleppo"],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hva ble kåret til årets spill under The Game Awards 2024?",
    options: [
      "Black Myth: Wukong",
      "Final Fantasy VII Rebirth",
      "Balatro",
      "Astro Bot",
    ],
    answerIndex: 3,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvilket land har IKKE en by ved navn Tripoli?",
    options: ["Libya", "Hellas", "Tunisia", "Libanon"],
    answerIndex: 2,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvilket av følgende er ikke et buldretak/grep(hold)?",
    options: ["Jug", "Crump", "Bucket", "Sloper"],
    answerIndex: 1,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "hva betyr det svenske ordet örngott?",
    options: ["Putevar", "Ørnemat", "Strikkegenser", "Lue"],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvor mange bøker er det i den originale Harry Potter-serien?",
    options: ["6", "7", "8", "9"],
    answerIndex: 1,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt:
      "Hvis man ser bort fra kostnader for personell, infrastruktur, investeringer og oppgraderinger. Hva er ca. timesprisen for å holde en F-35 i lufta?",
    options: ["110 000 kr", "250 000 kr", "360 000 kr", "420 000 kr"],
    answerIndex: 2,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hva betyr ordet 'Volvo' ?",
    options: ["Jeg ruller", "Vogn", "Jeg beveger", "Jeg roterer"],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvilken diagnose har Carl XVI Gustaf av Sverige?",
    options: [
      "Dysleksi",
      "ADHD",
      "Borderline personlighetsforstyrrelse",
      "Epilepsi",
    ],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt:
      "I hvilket år ble sangen 'Gangnam Style' utgitt av den koreanske artisten Psy?",
    options: ["2010", "2011", "2012", "2013"],
    answerIndex: 2,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hva er menneskekroppens største organ?",
    options: ["Leveren", "Tarmene", "Huden", "Lungene"],
    answerIndex: 2,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),

    prompt:
      "På slutten av 900-tallet, muligens i år 986, bekjempet bla. ladejarlene en dansk invasjonsflåte. Hva heter slaget?",
    options: [
      "Slaget ved Fitjar på Stord",
      "Slaget ved Svolder",
      "Slaget ved Stiklestad",
      "Slaget ved Hjørungavåg",
    ],
    answerIndex: 3,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hva heter hovedstaden i Brasil?",
    options: ["Brasília", "São Paulo", "Rio de Janeiro", "Fortaleza"],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt:
      "Einar Tambarskjelve pryder Melhus sitt kommunevåpen. Hva er han mest kjent for?",
    options: [
      "Jæskla god med spyd",
      "Jæskla god med Sverd",
      "Jæskla god med pil og bue",
      "Jæskla god med øks",
    ],
    answerIndex: 2,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Det er håp..",
    options: [
      "for alle",
      "uansett kva som skjer",
      "i hengande snøre",
      "i alle hus",
    ],
    answerIndex: 2,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hva er Norges nasjonalfugl?",
    options: ["Fossekall", "Dompap", "Hakkespett", "Kongeørn"],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
];
