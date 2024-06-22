import { useState } from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Options from "./components/Options/Options";

function App() {
  const [selectOption, setSelectOption] = useState();
  return (
    <>
      <div className={styles.app}>
        <div className={styles.container}>
          <Navbar points={300} />
          <ProgressBar />
          {/* QUESTIONS */}
          <div className={styles.questions}>
            <h3>PREDICT THE TOP LOSER (for tomorrow) across these indices</h3>
          </div>
          <Options
            selectOption={selectOption}
            setSelectOption={setSelectOption}
          />
        </div>
      </div>
    </>
  );
}

export default App;
