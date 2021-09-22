import React, { useState } from "react";
import Image from "next/image";
import LogButton from "../LogButton";
import TDModal from "../TDModal";
import BindInfo from "../BindInfo";
import LogList from "./LogList";
import MoneyProgress from "../Landing/MoneyProgress";
import ICON_CASHLOG from "../../assets/money.png";
import PNG_PROFILE from "../../assets/profile.png"
import PNG_COMPLETE from "../../assets/complete.png"
import styles from "./index.module.css";

const GetCashLog = () => {

    const [visible, setVisible] = useState<boolean>(false);
    const [bindVisible, setBindVisible] = useState<boolean>(false);

    return (
        <React.Fragment>
            <LogButton
                icon={<Image src={ICON_CASHLOG} alt="获取现金记录" width={19} height={19} />}
                text="获取现金记录"
                onClick={() => setVisible(true)}
            />
            <TDModal
                // top="15%"
                visible={visible}
                onClose={() => setVisible(false)}
            >
                <div className={styles.get_cash_log}>
                    <div className={styles.avatar}>
                        <Image className={styles.avatar_img} src="/avatar.png" alt="" width={56} height={56} layout="responsive" />
                    </div>
                    <div className={styles.bind} onClick={() => setBindVisible(true)}>
                        <div className={styles.icon_info}>
                            <Image src={PNG_PROFILE} alt="" width={12} height={12} layout="responsive" />
                        </div>
                        <span>绑定游戏账号信息</span>
                    </div>
			        <BindInfo visible={bindVisible} onClose={() => setBindVisible(false)} />
			        <MoneyProgress style={{width: "98%"}} />
                    <LogList />
                    <button className={styles.btn_complete}>
                        <Image src={PNG_COMPLETE} alt="完成任务" width={167} height={46} layout="responsive" />
                    </button>
                </div>
            </TDModal>
        </React.Fragment>
    )
}

export default GetCashLog;
