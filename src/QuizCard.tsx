type Question = {
  id: string;
  prompt: string;
  options: string[];
  answerIndex: number;
  playerChoiceIndex: number | undefined;
};

const buttonStyles = [
  { letter: "A", bg: "bg-red-200 hover:bg-red-300" },
  { letter: "B", bg: "bg-green-200 hover:bg-green-300" },
  { letter: "C", bg: "bg-yellow-200 hover:bg-yellow-300" },
  { letter: "D", bg: "bg-purple-200 hover:bg-purple-300" },
];

function QuizCard({ question }: { question: Question }) {
  const { prompt, options } = question;
  return (
    <div className="bg-slate-200 rounded-lg border-2 border-black p-2">
      <div className="text-center p-2 font-semibold border-b-2 border-black mb-2">
        <span>{prompt}</span>
      </div>
      <div className="flex flex-col space-y-2">
        {options.map((option, index) => (
          <button
            key={index}
            className={` rounded-lg flex items-center w-full text-left border-black border`}
          >
            <span
              className={`${buttonStyles[index].bg} font-bold w-8 text-center h-fit py-2 border-e border-black rounded-s-lg`}
            >
              {buttonStyles[index].letter}:
            </span>
            <span className="p-2 bg-slate-100 w-full rounded-e-lg ">
              {option}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuizCard;
