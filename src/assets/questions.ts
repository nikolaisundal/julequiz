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
    prompt: "I Hvilket spill brukes flest terninger?",
    options: [
      "Monopol",
      "Yatzee",
      "Backgammon",
      "Jakten på den forsvunnede diamant",
    ],
    answerIndex: 1,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hva står SSD for?",
    options: [
      "Solid State Drive",
      "Sussy Sassy Daddies",
      "Serial Storage Device",
      "Synchronous Speed Driver",
    ],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvor mange planeter er det i solsystemet?",
    options: ["6", "7", "8", "9"],
    answerIndex: 2,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt:
      'I denne klassikeren fra 1976 anbefaler Blue Öyster Cult å "Don\'t fear the.."',
    options: ["Creeper", "Peeper", "Sleeper", "Reaper"],
    answerIndex: 3,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hva er ikke en kinesisk fast food-kjede?",
    options: ["Dicos", "Jollibee", "Laoxiangji", "Real Kungfu"],
    answerIndex: 1,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt:
      'I følge "Glade jul" daler englene ned i skjul, men hvordan går de iblandt oss?',
    options: ["Lønnlig", "Bønnlig", "Søvnig", "Gøfig"],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hva heter tolvfingertarmen på latin?",
    options: ["Duodenum", "Pancreas", "Retina", "Mons Pubis"],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt:
      "Hvilket av disse preparatene har ikke en pupilldilaterende effekt?",
    options: ["Cyclopentolat", "Pilokarpin", "Atropin", "Tropikamid"],
    answerIndex: 1,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt:
      'Hvilket programmeringsspråk brukes hovedsaklig i Microsofts ".NET-rammeverk"?',
    options: ["C#", "Go", "PHP", "Java"],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hva heter backingbandet til Bruce Springsteen?",
    options: [
      "The Band",
      "The Yardbirds",
      "The Jersey Crew",
      "The E Street Band",
    ],
    answerIndex: 3,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hva er lovlig makshastighet for elsparkesykler i Norge?",
    options: ["15 km/t", "20 km/t", "22 km/t", "25 km/t"],
    answerIndex: 1,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvilken lov gir deg rett til å tie under politiavhør?",
    options: [
      "Allemannsretten",
      "Politiloven",
      "Straffeprosessloven",
      "Domstolloven",
    ],
    answerIndex: 2,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hva av følgende er en italiensk vinregion?",
    options: ["Cote d'Rhone", "Rioja", "Burgundy", "Barolo"],
    answerIndex: 3,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvilken av følgende ledningstyper har best ledningsevne?",
    options: ["Aluminium", "Jern", "Kobber", "Nikkel"],
    answerIndex: 2,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvor feiret Dickoas jul i år?",
    options: ["Ulsteinvik", "Storås", "Bjugn", "Løset"],
    answerIndex: 1,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt:
      "Hvis man vil ha en moderne, effektiv og trygg drikkevannsinstallasjon i sitt hjem, hvilket materiale bør rørene ha?",
    options: ["Stål", "PVC", "Kobber eller plast (PEX/PB)", "Aluminium"],
    answerIndex: 2,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt:
      "For å unngå at fjøsnissen klikker i vinkel må man sette ut en matrett til hen. Hvilken matrett?",
    options: [
      "Entrecôte med béarnaise og pommes frites",
      "Grøt",
      "Lamb Shawarma",
      "Pølse i lompe",
    ],
    answerIndex: 1,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hva er Skandinavias høyeste fjell?",
    options: ["Kebnekaise", "Møllehøj", "Galdhøpiggen", "Åhkka"],
    answerIndex: 2,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt:
      'Hvis en danske ber deg sende et "viskestykke", hva er det som regel snakk om?',
    options: ["Viskelær", "Kjøkkenhåndkle", "Mikrofon", "Servietter"],
    answerIndex: 1,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "I hvilken gren har Marte Olsbu Røiseland tatt OL-gull i?",
    options: ["Alpint", "Skyskiting", "Kombinert", "Skiskyting"],
    answerIndex: 3,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hva het USAs første kvinnelige visepresident?",
    options: [
      "Condoleezza Rice",
      "Hillary Clinton",
      "Rosie O'Donnell",
      "Kamala Harris",
    ],
    answerIndex: 3,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "I hvilket år falt Berlinmuren?",
    options: ["1987", "1988", "1989", "1990"],
    answerIndex: 2,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvilken jordtype har dårligst bæreevne?",
    options: ["Leirjord", "Grusig sand", "Silt", "Hardpakket grus"],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },

  {
    id: crypto.randomUUID(),
    prompt:
      "Hvor ofte skal vernehjelm som har vært utsatt for slag eller støt byttes ut?",
    options: [
      "Etter 1 år",
      "Etter 3 år",
      "Umiddelbart",
      "Kun ved synlige skader",
    ],
    answerIndex: 2,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt:
      "Hva er den mest populære hovedretten på norske middagsbord på julaften?",
    options: ["Ribbe", "Lutefisk", "Grændiz", "Pinnekjøtt"],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
];
