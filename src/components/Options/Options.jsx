import { FaCheck } from "react-icons/fa6";
import styles from "./Options.module.css";
import CustomIcon from "../CustomIcon/CustomIcon";

function Options({ selectOption, setSelectOption }) {
  return (
    <ul className={styles.options}>
      {Array.from({ length: 4 }, (_, i) => (
        <li
          className={
            selectOption === i ? styles.optionActiveItem : styles.optionItem
          }
          key={i}
          onClick={() => setSelectOption(i)}
        >
          {selectOption === i ? (
            <CustomIcon color="#31CD63" bg="#F4F3F6">
              <FaCheck />
            </CustomIcon>
          ) : (
            <CustomIcon bg="#EDE8E3">A</CustomIcon>
          )}

          <p>NIFTY50</p>
        </li>
      ))}
    </ul>
  );
}

export default Options;
