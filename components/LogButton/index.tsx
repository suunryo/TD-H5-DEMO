import React from "react";
import styles from "./index.module.css";

interface LogButtonProps {
  icon: JSX.Element;
  text: string;
}
const LogButton: React.FC<LogButtonProps> = (props) => {

  const {icon, text} = props;

  return (
    <div className={styles.log_btn}>
      <div className={styles.log_btn_icon}>{icon}</div>
      <div>{text}</div>
    </div>
  )
}

export default LogButton;
