import { FaCheck } from "react-icons/fa6";
import styles from "./Options.module.css";
import CustomIcon from "../CustomIcon/CustomIcon";

const alphabets = ["A", "B", "C"];

function Options({ selectOption, setSelectOption, options }) {
  return (
    <ul className={styles.options}>
      {options.map((option, i) => (
        <li
          className={
            selectOption === i ? styles.optionActiveItem : styles.optionItem
          }
          key={i}
          onClick={() => {
            setSelectOption(i);
          }}
        >
          {selectOption === i ? (
            <>
              <CustomIcon color="#31CD63" bg="#F4F3F6">
                <FaCheck />
              </CustomIcon>
              <p>{option}</p>
            </>
          ) : (
            <>
              <CustomIcon bg="#EDE8E3">
                {alphabets.map((alphabet, j) => i === j && alphabet)}
              </CustomIcon>
              <p>{option}</p>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Options;
