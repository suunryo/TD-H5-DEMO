import React, { useState } from "react";
import styles from "./MoneyProgress.module.css";

const MoneyProgress = () => {

  const [percent, setPercent] = useState<string>("30%")

  return (
    <div className={styles.money_progress}>
      <div style={{width: percent}} className={styles.money_progress_line}>
        <div style={{left: percent}} className={styles.money_progress_spot}></div>
      </div>
      <div
        className={styles.money_progress_tips}
        style={{left: percent, transform: `translateX(-${percent})`}}
      >
        共计30元，还差
        <span style={{color: "rgb(246, 80, 14)"}}>12</span>
        元可以提现
      </div>
    </div>
  )
}

export default MoneyProgress;
