import React from "react";
import styles from "./index.module.css";

interface OpButtonProps {
  text: string;
  subText?: string | JSX.Element;
  mode: "red" | "blue"
}
const OpButton: React.FC<OpButtonProps> = (props) => {

  const {
    text,
    subText,
    mode = "red"
  } = props;

  const getClsByMode = () => {
    switch (mode) {
      case "red":
        return styles.op_button_red
        break;
      case "blue":
        return styles.op_button_blue
        break;
      default: styles.op_button_red
        break;
    }
  }

  return (
    <button
      className={`${styles.op_button} ${getClsByMode()}`}
    >
      <div>{text}</div>
      {subText && <span className={styles.op_button_sub_text}>{subText}</span>}
    </button>
  )
};

export default OpButton;
