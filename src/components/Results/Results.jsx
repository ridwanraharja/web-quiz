import styles from "./Results.module.css";
import ResultImage from "../../assets/images/Results.png";
import CustomIcon from "../CustomIcon/CustomIcon";
import { FaCheck, FaXmark } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";

function Results({ setStage, points, resetQuiz }) {
  return (
    <div className={styles.results}>
      <div className={styles.container}>
        <div className={styles.navbarSection}>
          <CustomIcon setStage={setStage} resetQuiz={resetQuiz}>
            <FaXmark />
          </CustomIcon>
        </div>
        <div className={styles.resultImageContainer}>
          <img className={styles.resultImage} src={ResultImage} />
          <h1>Results of Quizzer</h1>
        </div>

        <div className={styles.options}>
          <div className={styles.optionItem}>
            <div className={styles.item}>
              <div className={styles.itemContainer}>
                <CustomIcon color="#31CD63" bg="#F0EBE6">
                  <FaMoneyBillWave />
                </CustomIcon>
                <h3>SCORE</h3>
              </div>
              <p>{points}</p>
            </div>
            <div className={styles.item}>
              <div className={styles.itemContainer}>
                <CustomIcon color="#31CD63" bg="#F0EBE6">
                  <FaCheck />
                </CustomIcon>
                <h3>CORRECT ANSWER</h3>
              </div>
              <p>{points / 100}</p>
            </div>
          </div>
        </div>
      </div>
      <button className="primaryBtn" onClick={() => resetQuiz()}>
        Okay
      </button>
    </div>
  );
}

export default Results;
