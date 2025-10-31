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
      "Hva heter plassen hvor avfallsprodukter fra utsmelting av metallble dumpet på Røros?",
    options: [
      "Slagghaugan",
      "Kobberhaugan",
      "Gråberghaugan",
      "Hans Olsen Assen-haugan",
    ],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvor ligger Mysen i forhold til Oslo?",
    options: ["Nordøst", "Sørøst", "Sørvest", "Nordvest"],
    answerIndex: 1,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hva heter myntenheten i Vietnam?",
    options: ["Dong", "Baht", "Ding", "Ringgit"],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "I hvilken idrett brukes font-skalaen?",
    options: [
      "Rytmisk sportsgymnastikk",
      "Skateboarding",
      "Klatring",
      "Kompetitiv finskriving",
    ],
    answerIndex: 2,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvor ble store deler av Sound of Music spilt inn?",
    options: [
      "Bolzano (Italia)",
      "München (Tyskland)",
      "Zürich (Sveits)",
      "Salzburg (Østerrike)",
    ],
    answerIndex: 3,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvilket av disse er IKKE et belgisk ølmerke?",
    options: ["Stella", "Jupiler", "Leffe", "Grolsch"],
    answerIndex: 3,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvem avlet på 1860-tallet frem den første Golden Retrieveren?",
    options: [
      "Lord Tweedmouth",
      "Lord Cottonmouth",
      "Lord Loudmouth",
      "Lord Rivermouth",
    ],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt:
      "Hvilken av disse soppene kan det potensielt hende man bare får spist den ene gangen?",
    options: ["Flatklokkehatt", "Steinsopp", "Kantarell", "Blek piggsopp"],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "M. Sommer er i følge logoen en:",
    options: ["Possementforretning", "Sybutikk", "Garnbutikk", "Tekstilhandel"],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvis en jente skal løpe Jentebølgen, hvor langt må hun løpe?",
    options: ["500 meter", "5 km", "10 km", "5 mil"],
    answerIndex: 1,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hva gir sushiris den karakteristiske smaken?",
    options: ["Sesamolje", "Mirin", "Riseddik", "Limejuice"],
    answerIndex: 2,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hva er Nintendos nyeste konsoll?",
    options: ["Wii U", "Switch II", "Game Cube", "Gameboy Advance"],
    answerIndex: 1,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvor mange nerveendinger er det estimert at en klitoris har?",
    options: ["2000", "4000", "8000", "Jeg trodde Klitoris var en gresk øy?"],
    answerIndex: 2,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt:
      "En av verdens beste diskgolf-baner ligger på Vestnes (Romsdal). Hva heter den?",
    options: ["Krokhol", "Øverås", "Othilienborg (Oth)", "Karidalen"],
    answerIndex: 1,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Cecilie Skog har hus på Kalymnos. Hvilket land tilhører øya?",
    options: ["Portugal", "Filippinene", "Indonesia ", "Hellas"],
    answerIndex: 3,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt:
      "Hva heter det runde/ovale hvetebrødet bakt med gjær, som brukes mye i det indiske kjøkken?",
    options: ["Naan", "Injera", "Bæraki", "Indisk kakskiv"],
    answerIndex: 0,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hva får du hvis en rogalending serverer deg 'kjyddisar'?",
    options: ["Rundstykker", "Fiskekaker", "Kjøttkaker", "Sveler"],
    answerIndex: 2,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvilket land er verdens største produsent av kaffebønner?",
    options: ["India", "Indonesia", "Etiopia", "Brasil"],
    answerIndex: 3,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvem skrev 'Tatt av kvinnen' (1993)?",
    options: [
      "Karl Ove Knausgård",
      "Jostein Gaarder",
      "Erlend Loe",
      "Ingvar Ambjørnsen",
    ],
    answerIndex: 2,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hvordan sier man frosk på dansk?",
    options: ["Gro", "Tudse", "Kræmme", "Frø"],
    answerIndex: 3,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "Hva er erytrocytter?",
    options: [
      "Hvite blodlegemer",
      "Blodplater",
      "Røde blodlegemer",
      "Blodplasma",
    ],
    answerIndex: 2,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt:
      "Hvem spilte både Benny 'nåsåen' Jensen og nissen Fritz i 'The Julekalender'?",
    options: ["Tore Johansen", "Ivar Gafseth", "Erling Mylius", "Arve Opsahl"],
    answerIndex: 2,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt:
      "I 2004 klatret dette bandet inn på hitlistene med singler som 'Take Me Out' og 'The Dark of the Matinée'?",
    options: ["The Strokes", "Franz Ferdinand", "Arctic Monkeys", "The Hives"],
    answerIndex: 1,
    playerChoiceIndex: undefined,
  },
  {
    id: crypto.randomUUID(),
    prompt: "I følge bibelen ble Jesus født...",
    options: [
      "På Regionsykehuset i Trondheim (RIT)",
      "I en stall",
      "I et oppblåsbart badebasseng (live på Twitch)",
      "Under ei julegran",
    ],
    answerIndex: 1,
    playerChoiceIndex: undefined,
  },
];
