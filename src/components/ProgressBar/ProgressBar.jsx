import styles from "./ProgressBar.module.css";
function ProgressBar({ numberOfQuestions, selectedQuestion }) {
  return (
    <div className={styles.progressBar}>
      <progress
        className={styles.progress}
        id="progress"
        value={selectedQuestion + 1}
        max={numberOfQuestions}
      ></progress>
      <label htmlFor="progress">
        {selectedQuestion + 1}/{numberOfQuestions}
      </label>
    </div>
  );
}

export default ProgressBar;
