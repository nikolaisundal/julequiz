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
          : question,
      ),
    );
  };
  const allQuestionsAnswered = questionList.every(
    (question) => question.playerChoiceIndex !== undefined,
  );

  const checkAnswers = () => {
    if (!allQuestionsAnswered) {
      setShowUnansweredWarning(true);
      alert(
        "Vennligst fyll inn alle svar. Kort uten svar er merket med rød bakgrunn!",
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
          <div className="snow">🐣</div>
          <div className="snow">🥚</div>
          <div className="snow">🐰</div>
          <div className="snow">⛷️</div>
          <div className="snow">🍬</div>
          <div className="snow">🐥</div>
          <div className="snow">☀️</div>
          <div className="snow">🍫</div>
          <div className="snow">❄️</div>
          <div className="snow">🎿</div>
          <div className="snow">🐇</div>
          <div className="snow">🥚</div>
          <div className="snow">🍭</div>
          <div className="snow">🐰</div>
          <div className="snow">⛷️</div>
          <div className="snow">🐤</div>
          <div className="snow">☀️</div>
          <div className="snow">🍫</div>
          <div className="snow">🥚</div>
          <div className="snow">❄️</div>
          <div className="snow">🐣</div>
          <div className="snow">🎿</div>
          <div className="snow">🌷</div>
          <div className="snow">🍬</div>
          <div className="snow">⛷️</div>

          <div className="snow hidden md:block">🐣</div>
          <div className="snow hidden md:block">🥚</div>
          <div className="snow hidden md:block">🐰</div>
          <div className="snow hidden md:block">🌷</div>
          <div className="snow hidden md:block">⛷️</div>
          <div className="snow hidden md:block">🍬</div>
          <div className="snow hidden md:block">🐥</div>
          <div className="snow hidden md:block">☀️</div>
          <div className="snow hidden md:block">🍫</div>
          <div className="snow hidden md:block">❄️</div>
          <div className="snow hidden md:block">🎿</div>
          <div className="snow hidden md:block">🐇</div>
          <div className="snow hidden md:block">🥚</div>
          <div className="snow hidden md:block">🍭</div>
          <div className="snow hidden md:block">🐰</div>
          <div className="snow hidden md:block">🐤</div>
          <div className="snow hidden md:block">☀️</div>
          <div className="snow hidden md:block">🍫</div>
          <div className="snow hidden md:block">🥚</div>
          <div className="snow hidden md:block">🐣</div>
          <div className="snow hidden md:block">🎿</div>
          <div className="snow hidden md:block">🍬</div>
          <div className="snow hidden md:block">⛷️</div>
          <div className="snow hidden md:block">🐇</div>
          <div className="snow hidden md:block">🍭</div>

          <div className="snow hidden xl:block">🐣</div>
          <div className="snow hidden xl:block">🥚</div>
          <div className="snow hidden xl:block">🐰</div>
          <div className="snow hidden xl:block">🌷</div>
          <div className="snow hidden xl:block">⛷️</div>
          <div className="snow hidden xl:block">🍬</div>
          <div className="snow hidden xl:block">🐥</div>
          <div className="snow hidden xl:block">☀️</div>
          <div className="snow hidden xl:block">🍫</div>
          <div className="snow hidden xl:block">❄️</div>
          <div className="snow hidden xl:block">🎿</div>
          <div className="snow hidden xl:block">🐇</div>
          <div className="snow hidden xl:block">🥚</div>
          <div className="snow hidden xl:block">🍭</div>
          <div className="snow hidden xl:block">🐰</div>
          <div className="snow hidden xl:block">🐤</div>
          <div className="snow hidden xl:block">☀️</div>
          <div className="snow hidden xl:block">🍫</div>
          <div className="snow hidden xl:block">🥚</div>
          <div className="snow hidden xl:block">🐣</div>
          <div className="snow hidden xl:block">🎿</div>
          <div className="snow hidden xl:block">🍬</div>
          <div className="snow hidden xl:block">⛷️</div>
          <div className="snow hidden xl:block">🐇</div>
          <div className="snow hidden xl:block">🍭</div>
        </div>

        <div className="w-full h-screen fixed flex justify-center overflow-y-auto">
          <div className="w-full max-w-sm relative md:pt-24">
            <div className="h-screen md:h-auto flex flex-col justify-center items-center mb-36 gap-28">
              <div className="relative flex justify-center items-center text-slate-800 border-2 border-black rounded-full h-72 w-72 bg-white mx-auto">
                <div className="bg-yellow-300 h-52 w-52 rounded-full border"></div>
                <h1 className="absolute text-4xl font-bold top-24">Nikolais</h1>
                <h1 className="absolute text-4xl font-bold bottom-24">
                  påskequiz
                </h1>
              </div>

              <button
                className="md:hidden text-slate-700 flex flex-col items-center gap-5"
                onClick={() => {
                  document
                    .getElementById("quiz-start")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span className="text-2xl font-bold bg-yellow-100 border-2 border-black backdrop-blur-sm px-4 py-2 text-black rounded-full">
                  Trykk for å starte
                </span>

                <svg
                  className="h-8 w-8 animate-bounce text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </button>
            </div>

            <div id="quiz-start" className="space-y-10 pb-32">
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
            <div className="w-full flex justify-center items-center h-52 pb-96 pt-24">
              {isQuizChecked ? (
                <button
                  className="bg-white p-4 border-2 border-black font-semibold text-2xl space-y-4"
                  style={{
                    borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                    width: "160px",
                    height: "200px",
                  }}
                >
                  <div className="text-5xl">🐣</div>
                  <div>{`${points} / ${questionList.length}`}</div>{" "}
                </button>
              ) : (
                <div
                  className={
                    allQuestionsAnswered ? "animate-bounce saturate-150" : ""
                  }
                >
                  <button
                    className="bg-gradient-to-r from-[#f1eeee] to-[#fbfbf5] p-4 border-2 border-black font-semibold hover:drop-shadow-xl hover:-translate-y-0.5 duration-100 text-2xl"
                    style={{
                      borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                      width: "160px",
                      height: "200px",
                    }}
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
