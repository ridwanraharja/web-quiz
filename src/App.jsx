import { useState } from "react";
import styles from "./App.module.css";
import data from "./data/data.json";
import Quiz from "./components/Quiz/Quiz";
import Homepage from "./components/Homepage/Homepage";
import Results from "./components/Results/Results";

function App() {
  const questions = data;

  const [selectOption, setSelectOption] = useState(null);
  const [stage, setStage] = useState("ready");
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [points, setPoints] = useState(0);
  const numberOfQuestions = questions.length;

  const resetQuiz = () => {
    setSelectOption(null);
    setSelectedQuestion(0);
    setPoints(0);
    setStage("ready");
  };

  return (
    <>
      <div className={styles.app}>
        <div className={styles.container}>
          {stage === "ready" && <Homepage setStage={setStage} />}
          {stage === "start" && (
            <Quiz
              points={points}
              setPoints={setPoints}
              question={questions[selectedQuestion]}
              selectedQuestion={selectedQuestion}
              setSelectedQuestion={setSelectedQuestion}
              selectOption={selectOption}
              setStage={setStage}
              setSelectOption={setSelectOption}
              numberOfQuestions={numberOfQuestions}
            />
          )}
          {stage === "finish" && (
            <Results
              setStage={setStage}
              points={points}
              resetQuiz={resetQuiz}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
