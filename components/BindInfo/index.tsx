import React, { useState } from "react";
import TDSelect, { TDOption } from "../TDSelect";
import TDModal, { TDModalProps } from "../TDModal";
import styles from "./index.module.css";
import OpButton from "../OpButton";

const systems = [
    { name: "IOS", value: 1 },
    { name: "安卓", value: 2 }
]

const regionList = [
    { name: "电信区", value: 1 },
    { name: "网通区", value: 2 },
    { name: "教育网", value: 3 },
]

const userList = [
    { name: "角色1", userId: "abcd-efgh-xyz" },
    { name: "角色2", userId: "abcd-efgh-xyz1" },
    { name: "角色3", userId: "abcd-efgh-xyz2" },
]

interface FormDataType {
    system: number;
    region: number;
    userId?: string;
}

interface BindInfoProps extends Pick<TDModalProps, "visible" | "onClose"> {

}
const BindInfo: React.FC<BindInfoProps> = (props) => {

    const [formData, setFormData] = useState<FormDataType>({
        system: 1,
        region: 2
    });

    const handleChange = (key, value) => {
        const newData = {
            ...formData,
            [key]: value
        }

        setFormData(newData);
    }

    return (
        <TDModal
            top={120}
            visible={props.visible}
            onClose={props.onClose}
        >
            <div className={styles.bind_info}>
                <div className={styles.bind_info_title}>
                    请先绑定区服角色信息
                </div>
                <div className={styles.bind_info_form}>
                    <TDSelect
                        label="系统"
                        value={formData.system}
                        onChane={(value) => handleChange("system", value)}
                    >
                        {systems.map((option, index) => (
                            <TDOption key={index} name={option.name} value={option.value} />
                        ))}
                    </TDSelect>
                    <TDSelect
                        label="平台"
                        value="微信"
                        disabled={true}
                    ></TDSelect>
                    <TDSelect
                        label="区服"
                        value={formData.region}
                        onChane={(value) => handleChange("region", value)}
                    >
                        {regionList.map((option, index) => (
                            <TDOption key={index} name={option.name} value={option.value} />
                        ))}
                    </TDSelect>
                    <TDSelect
                        label="角色"
                        value={formData.userId}
                        placeholder="请选择角色"
                        onChane={(value) => handleChange("userId", value)}
                    >
                        {userList.map((option, index) => (
                            <TDOption key={index} name={option.name} value={option.userId} />
                        ))}
                    </TDSelect>
                </div>
                <div className={styles.bind_info_actions}>
                    <OpButton styles={{marginRight: 10}} text="确认" mode="red" />
                    <OpButton text="下载游戏" mode="yellow" />
                </div>
            </div>
        </TDModal>
    )
};

export default BindInfo;
