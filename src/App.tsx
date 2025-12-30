import QuizCard from "./QuizCard";
import { useState } from "react";
import { questions } from "./assets/questions";

type Question = {
  id: string;
  prompt: string;
  options: string[];
  answerIndex: number;
  playerChoiceIndex: number | undefined;
};

function App() {
  const [questionList, setQuestionList] = useState<Question[]>(questions);
  const [isQuizChecked, setIsQuizChecked] = useState(false);
  const [points, setPoints] = useState<number>(0);
  const [showUnansweredWarning, setShowUnansweredWarning] = useState(false);

  const optionSelect = (index: number, id: string) => {
    setQuestionList((questions) =>
      questions.map((question) =>
        question.id === id
          ? { ...question, playerChoiceIndex: index }
          : question
      )
    );
  };
  const allQuestionsAnswered = questionList.every(
    (question) => question.playerChoiceIndex !== undefined
  );

  const checkAnswers = () => {
    if (!allQuestionsAnswered) {
      setShowUnansweredWarning(true);
      alert(
        "Vennligst fyll inn alle svar. Kort uten svar er merket med rød bakgrunn!"
      );
      return;
    }
    setIsQuizChecked(true);
    const score = questionList.reduce((count, question) => {
      return question.playerChoiceIndex === question.answerIndex
        ? count + 1
        : count;
    }, 0);
    setPoints(score);
  };

  return (
    <>
      <div className="main">
        <div className="initial-snow">
          <div className="snow">🎆</div>
          <div className="snow">🎁</div>
          <div className="snow">🥂</div>
          <div className="snow">🎇</div>
          <div className="snow">❄️</div>
          <div className="snow">🍾</div>
          <div className="snow">🎉</div>
          <div className="snow">⛄</div>
          <div className="snow">❄️</div>
          <div className="snow">🎊</div>
          <div className="snow">✨</div>
          <div className="snow">🤶🏻</div>
          <div className="snow">🕛</div>
          <div className="snow">🎆</div>
          <div className="snow">🤶🏽</div>
          <div className="snow">🥳</div>
          <div className="snow">🪩</div>
          <div className="snow">🤶🏻</div>
          <div className="snow">🎇</div>
          <div className="snow">🌟</div>
          <div className="snow">👼🏾</div>
          <div className="snow">🥂</div>
          <div className="snow">🎈</div>
          <div className="snow">❄️</div>
          <div className="snow">🎆</div>
          <div className="snow">⭐</div>
          <div className="snow">🎄</div>
          <div className="snow">🍾</div>
          <div className="snow">🎉</div>
          <div className="snow">🎅🏻</div>
          <div className="snow">☃️</div>
          <div className="snow">✨</div>
          <div className="snow">🎄</div>
          <div className="snow">🎊</div>
          <div className="snow">🎇</div>
          <div className="snow">🤶🏿</div>
          <div className="snow">🥳</div>
          <div className="snow">🎆</div>
          <div className="snow">👼🏾</div>
          <div className="snow">🌟</div>
          <div className="snow">🪩</div>
          <div className="snow">🎅🏻</div>
          <div className="snow">🥂</div>
          <div className="snow">🎈</div>
          <div className="snow">🧝</div>
          <div className="snow">✨</div>
          <div className="snow">🎉</div>
          <div className="snow">🎅🏾</div>
          <div className="snow">⭐</div>
          {/* <div className="snow">❄️</div>
          <div className="snow">🎅🏽</div>
          <div className="snow">⛄</div>
          <div className="snow">🎁</div>
          <div className="snow">🎅</div>
          <div className="snow">❄️</div>
          <div className="snow">🔔</div>
          <div className="snow">🌟</div>
          <div className="snow">🤶🏻</div>
          <div className="snow">⛄</div>
          <div className="snow">❄️</div>
          <div className="snow">🧝</div>
          <div className="snow">🤶🏾</div>
          <div className="snow">🎄</div>
          <div className="snow">❄️</div>
          <div className="snow">🎁</div>
          <div className="snow">👼🏽</div>
          <div className="snow">🎄</div>
          <div className="snow">❄️</div>
          <div className="snow">🛷</div>
          <div className="snow">🎅🏻</div>
          <div className="snow">🤶🏻</div>
          <div className="snow">❄️</div>
          <div className="snow">🎁</div>
          <div className="snow">⭐</div>
          <div className="snow">🔔</div>
          <div className="snow">🤶🏽</div>
          <div className="snow">❄️</div>
          <div className="snow">🧝‍♀️</div>
          <div className="snow">❄️</div>
          <div className="snow">🦌</div>
          <div className="snow">🎄</div>
          <div className="snow">❄️</div>
          <div className="snow">🦌</div>
          <div className="snow">🎅🏾</div>
          <div className="snow">❄️</div>
          <div className="snow">🍬</div>
          <div className="snow">🎅🏿</div>
          <div className="snow">❄️</div>
          <div className="snow">🎁</div>
          <div className="snow">👼🏾</div>
          <div className="snow">❄️</div>
          <div className="snow">👼</div>
          <div className="snow">🤶🏿</div>
          <div className="snow">❄️</div>
          <div className="snow">🎁</div>
          <div className="snow">☃️</div>
          <div className="snow">❄️</div>
          <div className="snow">🎅🏼</div>
          <div className="snow">⭐</div> */}
        </div>
        <div className="w-full h-screen fixed flex justify-center overflow-y-auto">
          <div className="w-full max-w-sm relative  pt-14">
            <div className="text-center text-slate-100 mb-36 bg-red-300 text-4xl border-2 border-black p-4 rounded-lg space-y-4">
              <h1 className=""> Nikolais julequiz</h1>
              <div className="flex justify-evenly">
                <svg
                  className="h-8 w-8 text-red-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                <svg
                  className="h-8 w-8 text-red-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                <svg
                  className="h-8 w-8 text-red-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                <svg
                  className="h-8 w-8 text-red-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                <svg
                  className="h-8 w-8 text-red-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                <svg
                  className="h-8 w-8 text-red-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
            </div>

            <div className=" space-y-10 pb-32">
              {questionList.map((question) => (
                <QuizCard
                  key={question.id}
                  question={question}
                  onSelect={optionSelect}
                  isQuizChecked={isQuizChecked}
                  showUnansweredWarning={showUnansweredWarning}
                />
              ))}
            </div>
            <div className="w-full flex justify-center items-center h-52 pb-96">
              {isQuizChecked ? (
                <button className="bg-gradient-to-r from-red-100 to-green-100 p-4 border-2 border-black rounded-lg font-semibold w-72 h-20 text-2xl">
                  {`Score: ${points} / ${questionList.length}`}
                </button>
              ) : (
                <div className={allQuestionsAnswered ? "animate-bounce saturate-150" : ""}>
                  <button
                    className="p-4 border-2 border-black rounded-lg font-semibold hover:drop-shadow-xl hover:-translate-y-0.5 duration-100 w-72 h-20 text-2xl bg-gradient-to-r from-red-200 to-green-200"
                    onClick={checkAnswers}
                  >
                    Se fasit
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
