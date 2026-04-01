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
          <div className="w-full max-w-sm relative  pt-32">
            <div className="relative flex justify-center items-center text-slate-800 mb-36 border-2 border-black rounded-full h-72 w-72 bg-white mx-auto">
              <div className="bg-yellow-400 h-48 w-48 rounded-full"></div>
              <h1 className="absolute text-4xl font-bold top-24">Nikolais</h1>
              <h1 className="absolute text-4xl font-bold bottom-24">
                påskequiz
              </h1>
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
