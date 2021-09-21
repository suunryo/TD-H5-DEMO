import React, { useState, useEffect } from "react";
import styles from "./index.module.css";

const Progress = () => {

  const [percent, setPercent] = useState<string>("0%");

  useEffect(() => {
    setTimeout(() => setPercent("60%"), 1500);
  }, [])
  
  return (
    <div className={styles.progress}>
      <div className={styles.progress_cursor_container}>
        <div
          className={styles.progress_cursor}
          style={{left: percent, transform: `translateX(-${percent})`}}
        >
          <div className={styles.progress_icon_money}>￥</div>
          <div>当前奖池金额</div>
        </div>
      </div>
      <div className={styles.progress_bar_bg}>
        <div className={styles.progress_bar}>
          <div className={styles.progress_bar_line} style={{width: percent}}>
            <div className={styles.progress_bar_spot} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Progress;
