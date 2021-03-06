import React, { useState } from "react";
import Image from "next/image";
import MoneyProgress from "./MoneyProgress";
import BindInfo from "../BindInfo";
import PNG_GAMEINFO_BG from "../../assets/game-info.png"
import PNG_PROFILE from "../../assets/profile.png"
import PNG_WITHDRAW from "../../assets/withdraw.png"
import styles from "./GameInfo.module.css";

const GameInfo = () => {

	const [visible, setVisible] = useState<boolean>(false);

	return (
		<div className={styles.game_info}>
			<Image src={PNG_GAMEINFO_BG} alt="" width={305} height={261} layout="responsive" />
			<div className={styles.avatar}>
				<Image className={styles.avatar_img} src="/avatar.png" alt="" width={56} height={56} layout="responsive" />
			</div>
			<div className={styles.bind} onClick={() => setVisible(true)}>
				<div className={styles.icon_info}>
					<Image src={PNG_PROFILE} alt="" width={12} height={12} layout="responsive" />
				</div>
				<span>绑定游戏账号信息</span>
			</div>
			<MoneyProgress />
			<button className={styles.get_cash}>
				<Image src={PNG_WITHDRAW} alt="" width={183} height={60} layout="responsive" />
			</button>
			<BindInfo visible={visible} onClose={() => setVisible(false)} />
		</div>
	)
}

export default GameInfo;
