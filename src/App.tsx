import QuizCard from "./QuizCard";

function App() {
  type Question = {
    id: string;
    prompt: string;
    options: string[];
    answerIndex: number;
    playerChoiceIndex: number | undefined;
  };

  const questionList: Question[] = [
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
      options: [
        "Camilla Herrem",
        "Nora Mørk",
        "Trine Haltvik",
        "Kjersti Grini",
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
      options: ["Libya", "Tunisia", "Hellas", "Libanon"],
      answerIndex: 1,
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
      prompt:
        "Hvis man ser bort fra kostnader for personell, infrastruktur, investeringer og oppgraderinger. Hva er ca. timesprisen for å holde en F-35 i lufta?",
      options: ["110 000 kr", "250 000 kr", "360 000 kr", "420 000 kr"],
      answerIndex: 1,
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
      answerIndex: 1,
      playerChoiceIndex: undefined,
    },
    {
      id: crypto.randomUUID(),
      prompt:
        "I hvilket år ble sangen 'Gangnam Style' av den koreanske artisten Psy utgitt?",
      options: ["2010", "2011", "2012", "2013"],
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
      answerIndex: 2,
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
      answerIndex: 0,
      playerChoiceIndex: undefined,
    },
  ];

  return (
    <>
      <div className="loader">
        <div className="loader-icon-1">&#10052;</div>
        <div className="loader-text">Lazter...</div>
      </div>
      <div className="main">
        <div className="initial-snow">
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
          <div className="snow">&#10052;</div>
        </div>
        <div className="w-full h-screen fixed flex justify-center overflow-y-auto">
          <div className=" w-full max-w-sm relative z-50 pt-20">
            <h1 className="text-center text-slate-100 mb-20 bg-red-700 text-4xl border-2 border-black p-4 rounded-lg">
              Velkommen til Nikolais julequiz
            </h1>

            <div className=" space-y-8 pb-36">
              {questionList.map((question) => (
                <QuizCard key={question.id} question={question} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
