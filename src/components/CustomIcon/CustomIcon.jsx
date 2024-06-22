import styles from "./CustomIcon.module.css";

function CustomIcon({
  children,
  color = "black",
  bg = "white",
  width = "26px",
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
      >
        {children}
      </div>
    </>
  );
}

export default CustomIcon;
