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
    prompt: "Hvor lever dovendyret?",
    options: ["Europa (Reppe)", "Sør-Amerika", "Afrika", "Asia"],
    answerIndex: 1,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Fra hvilket land kommer matretten sushi?",
    options: ["Japan", "Kina", "Thailand", "Vietnam"],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt:
      "Hva kalles en tatovering som går som et bånd rundt over- eller underarma?",
    options: ["Sleeve", "Armband", "Wrap", "Circle"],
    answerIndex: 1,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt:
      "Hva er grunnelementene i klassisk markedsføringsteori, ofte kalt 'markedsmiksen'?",
    options: [
      "Pussy, money, weed",
      "Location, location, location",
      "Produkt, pris, plassering, påvirkning",
      "Kjøp lavt, selg høyt",
    ],
    answerIndex: 2,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvilket år slo Norge Brasil 2-1 i fotball-VM?",
    options: ["1990", "1994", "1998", "2002"],
    answerIndex: 2,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hva er summen av de innvendige vinklene i en trekant?",
    options: ["45", "90", "135", "180"],
    answerIndex: 3,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt:
      "Hva er det viktigste enkelttiltaket for å forebygge sykehusinfeksjoner?",
    options: [
      "God håndhygiene",
      "Bruk av antibiotika",
      "Isolering av alle pasienter",
      "Daglig skift av sengetøy",
    ],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvilken av disse trekker mest strøm i løpet av én times bruk?",
    options: ["Kjøleskap", "LED-TV", "Stekeovn", "Laptop"],
    answerIndex: 2,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvilken av disse er IKKE en av de tre store cloud-leverandørene?",
    options: ["AWS", "Google Cloud Platform", "Microsoft Azure", "VMware"],
    answerIndex: 3,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt:
      "Når en student søker permisjon fra studiene, hva beholder de vanligvis?",
    options: [
      "Studieplassen sin",
      "Rett til studielån",
      "Tilgang til alle universitetets ressurser",
      "Tilgang til å levere obligatoriske oppgaver",
    ],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hva heter det proffeste hockeylaget i Trondheim?",
    options: [
      "Nidaros Hockey",
      "Rosenborg Hockey",
      "Trondheim Ishockeyklubb",
      "Tiller Hockey",
    ],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvilken farge får man hvis man blander blå og rød?",
    options: ["Grønn", "Lilla", "Oransje", "Gult"],
    answerIndex: 1,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvilket land tilhører Bali?",
    options: ["Kina", "Thailand", "Indonesia", "Vietnam"],
    answerIndex: 2,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hva kalles de store 'puzzlebitene' som jordskorpen er delt inn i?",
    options: ["Kontinenter", "Jordlag", "Tektoniske plater", "Kratere"],
    answerIndex: 2,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hva står 'WWW' for?",
    options: [
      "World Wide Web",
      "Weni, Widi, Wici",
      "Wild Wanting Women",
      "World Wide Waldo",
    ],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hva er Rutas slagord/verdier?",
    options: [
      "Sex, drugs og byggingeniørkunst",
      "Kunnskap, engasjement, folkelighet",
      "Åpen, kompetent og modig",
      "Sylfrekk, sleip, zmidig",
    ],
    answerIndex: 1,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hva het hammeren til Tor i norrøn mytologi?",
    options: ["Sleipner", "Gungnir", "Mjølnir", "Járngreipr"],
    answerIndex: 2,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hva produseres på den store fabrikken på Ranheim? Den med pipa.",
    options: ["Dyner", "Den lager skyene", "Furbies", "Papp/papir"],
    answerIndex: 3,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvem skrev romanserien 'Min kamp'?",
    options: [
      "Adolf Hitler",
      "Ingvar Ambjørnsen",
      "Karl Ove Knausgård",
      "Jo Nesbø",
    ],
    answerIndex: 2,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hva heter bestevennen til Peppa Gris?",
    options: [
      "Susi Sau",
      "Kylie Kenguru",
      "Mohammad Marsvin",
      "Marvin Muldvarp",
    ],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
];
