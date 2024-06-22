import styles from "./ProgressBar.module.css";
function ProgressBar() {
  return (
    <div className={styles.progressBar}>
      <progress className={styles.progress} id="progress" value="1" max="5">
        {" "}
        32%{" "}
      </progress>
      <label htmlFor="progress">1/5</label>
    </div>
  );
}

export default ProgressBar;
