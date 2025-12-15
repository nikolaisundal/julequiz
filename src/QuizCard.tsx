type Question = {
  id: string;
  prompt: string;
  options: string[];
  answerIndex: number;
  playerChoiceIndex: number | undefined;
};
type QuizCardProps = {
  question: Question;
  onSelect: (index: number, id: string) => void;
  isQuizChecked: boolean;
  showUnansweredWarning: boolean;
};

const buttonStyles = [
  {
    letter: "A",
    bg: "bg-red-200",
    selectedBg: "bg-red-400",
  },
  {
    letter: "B",
    bg: "bg-green-200",
    selectedBg: "bg-green-400",
  },
  {
    letter: "C",
    bg: "bg-yellow-200",
    selectedBg: "bg-yellow-400",
  },
  {
    letter: "D",
    bg: "bg-purple-200",
    selectedBg: "bg-purple-400",
  },
];

function QuizCard({
  question,
  isQuizChecked,
  showUnansweredWarning,
  onSelect,
}: QuizCardProps) {
  const { prompt, options, playerChoiceIndex, id } = question;
  return (
    <div
      className={`rounded-lg border-2 border-black p-2 ${
        showUnansweredWarning && playerChoiceIndex === undefined
          ? "bg-red-100 ring-2 ring-red-500"
          : "bg-green-100"
      }`}
    >
      <div className="text-center p-2 font-semibold border-b-2 border-black pb-3 mb-2">
        <span>{prompt}</span>
      </div>
      <div className="flex flex-col space-y-4 py-2">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => (!isQuizChecked ? onSelect(index, id) : undefined)}
            className={`rounded-lg flex items-center w-full text-left border-black border h-12
  ${
    !isQuizChecked
      ? "hover:drop-shadow-xl hover:-translate-y-0.5 duration-100 delay-50"
      : ""
  } ${playerChoiceIndex === index ? "ring-2 ring-black" : ""}`}
          >
            <div className="flex items-center w-full text-left h-full">
              <span
                className={`${
                  playerChoiceIndex === index
                    ? buttonStyles[index].selectedBg
                    : buttonStyles[index].bg
                } font-bold w-10 text-center border-e h-full border-black rounded-s-lg flex items-center justify-center`}
              >
                {buttonStyles[index].letter}:
              </span>
              <span
                className={`px-2 h-full w-full rounded-e-lg flex items-center justify-between ${
                  playerChoiceIndex === index ? "bg-slate-200" : "bg-white"
                } ${
                  isQuizChecked
                    ? question.answerIndex === index
                      ? "text-green-700 font-semibold"
                      : playerChoiceIndex === index
                        ? "text-red-700"
                        : ""
                    : ""
                }`}
              >
                <span>{option}</span>
                {isQuizChecked &&
                  playerChoiceIndex === index &&
                  question.answerIndex === index && (
                    <span className="text-green-600 text-xl">✓</span>
                  )}
                {isQuizChecked &&
                  playerChoiceIndex === index &&
                  question.answerIndex !== index && (
                    <span className="text-red-600 text-xl">✗</span>
                  )}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuizCard;
