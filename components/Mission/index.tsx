import React, { ReactElement } from "react";
import Image from "next/image";
import MissionItem from "./MissionItem";
import Rules from "./Rules";
import ICON_MISSION from "../../assets/mission-icon.png"
import styles from "./index.module.css";

interface MissionItem {
  title: string;
  desc: string;
  bonus: string;
}

const MISSION_LIST: MissionItem[] = [
  {
    title: "邀请好友注册",
    desc: "邀请好友新用户注册游戏",
    bonus: "+2元"
  },
  {
    title: "每日登录游戏",
    desc: "每日登录游戏即可获得",
    bonus: "0.5元"
  },
  {
    title: "游戏内活跃度",
    desc: "游戏内每周活跃度达到600可获得",
    bonus: "3元"
  },
  {
    title: "累计登录",
    desc: "累计登录7天游戏可获得",
    bonus: "5元"
  },
  {
    title: "邀请好友累计登录",
    desc: "好友累计登录7天游戏可获得",
    bonus: "3元"
  }
]

const Mission = () => {

  const getDesc = (item: MissionItem): ReactElement => {
    return (
      <span>
        {item.desc}
        <span className={styles.mission_item_bonus}>{item.bonus}</span>
        现金
      </span>
    )
  }

  return (
    <div className={styles.mission}>
      <div className={styles.mission_title}>
        <Image src={ICON_MISSION} alt="现金任务" width={173} height={65} layout="responsive" />
      </div>
      <div className={styles.mission_list}>
        {MISSION_LIST.map((item, index) => (
          <MissionItem
            key={index}
            title={item.title}
            desc={getDesc(item)}
          />
        ))}
      </div>
      <Rules />
    </div>
  )
};

export default Mission;
