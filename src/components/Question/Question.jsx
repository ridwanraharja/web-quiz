import styles from "./Question.module.css";

function Question({ children, question }) {
  return (
    <>
      <div className={styles.questions}>
        <h3>{question}</h3>
      </div>
      {children}
    </>
  );
}

export default Question;
