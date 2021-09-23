import React from "react";
import Image from "next/image";
import BG_RED from "../../assets/btn-r.png";
import BG_BLUE from "../../assets/btn-b.png";
import BG_YELLOW from "../../assets/btn-y.png";
import styles from "./index.module.css";

interface OpButtonProps {
  text: string;
  subText?: string | JSX.Element;
  styles?: React.CSSProperties;
  mode: "red" | "blue" | "yellow"
}
const OpButton: React.FC<OpButtonProps> = (props) => {

  const {
    text,
    subText,
    mode = "red"
  } = props;

  const getButtonBg = () => {
    switch (mode) {
      case "red":
        return BG_RED
      case "blue":
        return BG_BLUE
      case "yellow":
        return BG_YELLOW
      default:
        return BG_RED
    }
  }

  return (
    <button
      className={styles.op_button}
      style={props.styles}
    >
      <div className={styles.op_button_bg}>
        <Image src={getButtonBg()} alt="" width={142} height={50} layout="responsive" />
      </div>
      <div className={styles.op_button_text}>{text}</div>
      {subText && <span className={styles.op_button_sub_text}>{subText}</span>}
    </button>
  )
};

export default OpButton;
