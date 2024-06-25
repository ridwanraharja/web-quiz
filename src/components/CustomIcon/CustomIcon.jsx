import styles from "./CustomIcon.module.css";

function CustomIcon({
  children,
  color = "black",
  bg = "white",
  width = "26px",
  setStage,
  resetQuiz,
}) {
  return (
    <>
      <div
        className={styles.customIcon}
        style={{
          color: color,
          backgroundColor: bg,
          width: width,
          height: width,
        }}
        onClick={() => {
          setStage("ready") || resetQuiz();
        }}
      >
        {children}
      </div>
    </>
  );
}

export default CustomIcon;
