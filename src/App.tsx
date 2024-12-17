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
        "Man er født uten rumpehull",
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
      options: ["Aleppo", "Homs", "Trine Haltvik", "Kjersti Grini"],
      answerIndex: 3,
      playerChoiceIndex: undefined,
    },
    {
      id: crypto.randomUUID(),
      prompt: "Hvilket land har IKKE en by kalt Tripoli?",
      options: ["Tunisia", "Hellas", "Libanon", "Libya"],
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
            <h1 className="text-center mb-20 bg-red-300 text-4xl border-4 border-green-300 p-4 rounded-lg">
              Velkommen til Nikolais julequiz
            </h1>

            <div className=" space-y-4 pb-20">
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
