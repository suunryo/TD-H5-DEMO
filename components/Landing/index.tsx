import React from "react";
import Image from "next/image";
import Progress from "./Progress";
import GameInfo from "./GameInfo";
import Operation from "./Operation";
import PNG_BG from "../../assets/bg1.png";
import PNG_SLOGAN from "../../assets/slogan.png"
import PNG_SLOGAN_TIPS from "../../assets/slogan-tips.png"
import PNG_START from "../../assets/start.png"
import styles from "./index.module.css";

const Landing = () => {

  return (
    <div className={styles.landing}>
      <div className={styles.landing_bg}>
        <Image src={PNG_BG} alt="" width={375} height={995} layout="responsive" />
      </div>
      <div className={styles.slogan}>
        <Image src={PNG_SLOGAN} alt="[天刀第一期]总奖池100万 等你瓜分" width={284} height={130} layout="responsive" />
      </div>
      <div className={styles.slogan_tips}>
        <Image src={PNG_SLOGAN_TIPS} alt="完成任务最少可领30元现金" width={262} height={20} layout="responsive" />
      </div>
      <Progress />
      <div className={styles.btn_start}>
        <Image src={PNG_START} alt="" width={216} height={75} layout="responsive" />
      </div>
      <GameInfo />
      <Operation />
    </div>
  )
};

export default Landing;
