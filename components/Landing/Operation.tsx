import React from "react";
import OpButton from "../OpButton";
import InviteLog from "../InviteLog";
import GetCashLog from "../GetCashLog";
import styles from "./Operation.module.css";

const Operation = () => {

	return (
		<div className={styles.operation}>
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
				<InviteLog />
				<div className={styles.operation_log_divider} />
				<GetCashLog />
			</div>
		</div>
	)
};

export default Operation;
