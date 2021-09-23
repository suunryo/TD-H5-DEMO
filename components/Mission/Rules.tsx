import React from "react";
import Image from "next/image";
import PNG_RULE from "../../assets/rule.png";
import styles from "./Rules.module.css";

const RULE_LIST = [
	"邀请好友新用户注册游戏+1元现金邀请好友新用户注册游戏+1元现金",
	"邀请好友新用户注册游戏+1元；",
	"邀请好友新用户注册游戏+1元现金邀请好友新用户注册游戏+1元现金",
	"邀请好友新用户注册游戏+1元。"
]

const Rules = () => {

	return (
		<div className={styles.rules}>
			<div className={styles.rules_header}>
				<Image src={PNG_RULE} alt="活动规则" width={611} height={42} layout="responsive" />
			</div>
			<div className={styles.rules_content}>
				{RULE_LIST.map((item, index) => (
					<p key={index} className={styles.rules_content_item}>{index + 1}. {item}</p>
				))}
			</div>
		</div>
	)
};

export default Rules;
