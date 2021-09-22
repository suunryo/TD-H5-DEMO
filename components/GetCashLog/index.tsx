import React, { useState } from "react";
import Image from "next/image";
import LogButton from "../LogButton";
import TDModal from "../TDModal";
import ICON_CASHLOG from "../../assets/money.png";

const GetCashLog = () => {

    const [visible, setVisible] = useState<boolean>(false);

    return (
        <React.Fragment>
            <LogButton
                icon={<Image src={ICON_CASHLOG} alt="获取现金记录" width={19} height={19} />}
                text="获取现金记录"
                onClick={() => setVisible(true)}
            />
            <TDModal
                visible={visible}
                onClose={() => setVisible(false)}
            >
                <div>GetCashLog</div>
            </TDModal>
        </React.Fragment>
    )
}

export default GetCashLog;
