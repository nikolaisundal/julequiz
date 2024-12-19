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

  const optionSelect = (index: number, id: string) => {
    setQuestionList((questions) =>
      questions.map((question) =>
        question.id === id
          ? { ...question, playerChoiceIndex: index }
          : question
      )
    );
  };

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
          {/*  <div className="snow">&#10052;</div>
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
          <div className="snow">&#10052;</div> */}
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
          <div className="w-full max-w-sm relative z-50 pt-20">
            <h1 className="text-center text-slate-100 mb-20 bg-red-300 text-4xl border-2 border-black p-4 rounded-lg">
              Velkommen til Nikolais julequiz
            </h1>

            <div className=" space-y-8 pb-36">
              {questionList.map((question) => (
                <QuizCard
                  key={question.id}
                  question={question}
                  onSelect={optionSelect}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
