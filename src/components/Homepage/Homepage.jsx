import styles from "./Homepage.module.css";
import Particle1 from "../../assets/images/particle1.png";
import Particle2 from "../../assets/images/particle2.png";

function Homepage({ setStage }) {
  return (
    <div className={styles.homepage}>
      <div className={styles.homepageContainer}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h1>Quizzer</h1>
          </div>
          <div className={styles.hr} />
          <h2>For General Investment</h2>
          <button className={styles.startBtn} onClick={() => setStage("start")}>
            Start
          </button>
        </div>
        <img className={styles.particle1} src={Particle1} />
        <img className={styles.particle2} src={Particle2} />
      </div>
    </div>
  );
}

export default Homepage;
