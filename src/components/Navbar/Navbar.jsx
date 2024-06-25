import CustomIcon from "../CustomIcon/CustomIcon";
import { FaXmark } from "react-icons/fa6";
import styles from "./Navbar.module.css";
import pointsImage from "../../assets/images/points.png";

function Navbar({ points, setStage }) {
  return (
    <div className={styles.navbarSection}>
      <div className={styles.points}>
        <img className={styles.pointsImage} src={pointsImage} />
        <p>{points}</p>
      </div>
      <h2>Quizzer</h2>
      <CustomIcon setStage={setStage}>
        <FaXmark />
      </CustomIcon>
    </div>
  );
}

export default Navbar;
