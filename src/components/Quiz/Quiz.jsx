import useWindowDimensions from "../../hooks/useWindowDimensions";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Options from "../Options/Options";
import ProgressBar from "../ProgressBar/ProgressBar";
import Question from "../Question/Question";
import styles from "./Quiz.module.css";

function Quiz({
  points,
  setPoints,
  question: item,
  selectedQuestion,
  setSelectedQuestion,
  selectOption,
  setSelectOption,
  setStage,
  numberOfQuestions,
}) {
  const { width } = useWindowDimensions();

  return (
    <div className={styles.quizContainer}>
      <div>
        <Navbar points={points} setStage={setStage} />
        {width < 768 && (
          <ProgressBar
            selectedQuestion={selectedQuestion}
            numberOfQuestions={numberOfQuestions}
          />
        )}
        <Question question={item.question}>
          <Options
            options={item.options}
            selectOption={selectOption}
            setSelectOption={setSelectOption}
          />
        </Question>
      </div>

      {width < 768 && (
        <button
          className="primaryBtn"
          disabled={selectOption === null}
          onClick={() => {
            if (selectedQuestion === numberOfQuestions - 1) {
              setSelectedQuestion(0);
              return setStage("finish");
            }

            if (selectOption === item.answer) {
              setPoints((state) => state + item.points);
            }

            setSelectedQuestion((state) => state + 1);
            setSelectOption(null);
          }}
        >
          Continue
        </button>
      )}

      {width >= 768 && (
        <Footer>
          <ProgressBar
            selectedQuestion={selectedQuestion}
            numberOfQuestions={numberOfQuestions}
          />
          <button
            className="primaryBtn"
            disabled={selectOption === null}
            onClick={() => {
              if (selectedQuestion === numberOfQuestions - 1) {
                setSelectedQuestion(0);
                return setStage("finish");
              }

              if (selectOption === item.answer) {
                setPoints((state) => state + item.points);
              }

              setSelectedQuestion((state) => state + 1);
              setSelectOption(null);
            }}
          >
            Continue
          </button>
        </Footer>
      )}
    </div>
  );
}

export default Quiz;
