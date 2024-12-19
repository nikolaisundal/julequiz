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

function QuizCard({ question, onSelect }: QuizCardProps) {
  const { prompt, options, playerChoiceIndex, id } = question;
  return (
    <div className="bg-green-100 rounded-lg border-2 border-black p-2">
      <div className="text-center p-2 font-semibold border-b-2 border-black mb-2">
        <span>{prompt}</span>
      </div>
      <div className="flex flex-col space-y-2">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelect(index, id)}
            className={`rounded-lg flex items-center w-full text-left border-black border 
  hover:drop-shadow-xl hover:-translate-y-0.5 duration-100 delay-75 ${
    playerChoiceIndex === index ? "ring-2 ring-black" : ""
  }`}
          >
            <div className="flex items-center w-full text-left ">
              <span
                className={`${
                  playerChoiceIndex === index
                    ? buttonStyles[index].selectedBg
                    : buttonStyles[index].bg
                } font-bold w-8 text-center py-2 border-e border-black rounded-s-lg`}
              >
                {buttonStyles[index].letter}:
              </span>
              <span
                className={`p-2 w-full rounded-e-lg ${
                  playerChoiceIndex === index ? "bg-slate-300" : "bg-white"
                }`}
              >
                {option}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuizCard;
