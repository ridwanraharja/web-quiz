import styles from "./Button.module.css";

function Button({ disabled = false }) {
  return (
    <button className={styles.primaryBtn} role="button" disabled={disabled}>
      Continue
    </button>
  );
}

export default Button;
