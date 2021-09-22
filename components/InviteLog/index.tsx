import React, { useState } from "react";
import Image from "next/image";
import LogButton from "../LogButton";
import TDModal from "../TDModal";
import LogTable from "./LogTable";
import ICON_FRIENDS from "../../assets/friends.png";
import styles from "./index.module.css";
import OpButton from "../OpButton";

const InviteLog = () => {

    const [visible, setVisible] = useState<boolean>(false);

    return (
        <React.Fragment>
            <LogButton
                icon={<Image src={ICON_FRIENDS} alt="好友邀请记录" width={19} height={19} />}
                text="好友邀请记录"
                onClick={() => setVisible(true)}
            />
            <TDModal
                visible={visible}
                onClose={() => setVisible(false)}
            >
                <div className={styles.invite_log}>
                    <div className={styles.invite_log_progress}>
                        <span className={styles.invite_log_progress_cur}>4</span>
                        /
                        <span>10</span>
                    </div>
                    <div className={styles.invite_log_progress_tips}>
                        <Image src={ICON_FRIENDS} alt="好友邀请记录" width={19} height={19} />
                        <span style={{marginLeft: 3}}>邀请好友进度</span>
                    </div>
                    <LogTable />
                    <div className={styles.invite_log_btn}>
                        <OpButton text="邀请更多好友" mode="red" />
                    </div>
                    <div className={styles.invite_log_tips}>活动期间最多邀请10位好友哦~</div>
                </div>
            </TDModal>
        </React.Fragment>
    )
}

export default InviteLog;
