import React from "react";
import Image from "next/image";
import OpButton from "../OpButton";
import LogButton from "../LogButton";
import ICON_FRIENDS from "../../assets/friends.png";
import ICON_CASHLOG from "../../assets/money.png";
import styles from "./Operation.module.css";

const Operation = () => {

  return (
    <div>
      <div className={styles.operation_btn}>
        <OpButton
          text="邀请好友"
          subText={<span>获得<span className={styles.span_cash}>1元</span>现金</span>}
          mode="red"
        />
        <OpButton
          text="新人注册"
          subText={<span>立即获得<span className={styles.span_cash}>5元</span>现金</span>}
          mode="blue"
        />
      </div>
      <div className={styles.operation_log}>
        <LogButton
          icon={<Image src={ICON_FRIENDS} alt="好友邀请记录" width={19} height={19} />}
          text="好友邀请记录"
        />
        <div className={styles.operation_log_divider} />
        <LogButton
          icon={<Image src={ICON_CASHLOG} alt="获取现金记录" width={19} height={19} />}
          text="获取现金记录"
        />
      </div>
    </div>
  )
};

export default Operation;
