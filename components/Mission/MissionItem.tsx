import React from "react";
import Image from "next/image";
import ICON_HONGBAO from "../../assets/hongbao.png"
import ICON_GET_CASH from "../../assets/get-cash.png"
import styles from "./MissionItem.module.css";

interface MissionItemProps {
	title: string;
	desc: string | JSX.Element;
}
const MissionItem: React.FC<MissionItemProps> = (props) => {

	const { title, desc } = props;

	return (
		<div className={styles.mission_item}>
			<div className={styles.item_title}>
				<div className={styles.item_title_icon}>
					<Image src={ICON_HONGBAO} alt="" width={28} height={28} layout="responsive" />
				</div>
				<div className={styles.item_title_text}>{title}</div>
			</div>
			<div className={styles.item_desc}>{desc}</div>

			<button className={styles.item_btn}>
				<Image src={ICON_GET_CASH} alt="" width={123} height={49} layout="responsive" />
			</button>
		</div>
	)
};

export default MissionItem;
