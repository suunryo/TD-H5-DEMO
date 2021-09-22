import React from "react";
import styles from "./index.module.css";

const LOG_DATA = [
    { name: "好友已注册", bonus: "1元" },
    { name: "今日登录", bonus: "0.2元" },
    { name: "活跃度达到200", bonus: "0.5元" },
    { name: "累计登录7天", bonus: "0.5元" },
    { name: "好友累计登录7天", bonus: "1元" },
    { name: "今日登录", bonus: "0.2元" },
    { name: "活跃度达到200", bonus: "0.5元" },
]

const LogList = () => {

    return (
        <div className={styles.log_list}>
            <div className={styles.log_list_header}>
                <div>任务名称</div>
                <div>现金数量</div>
            </div>
            <div className={styles.log_list_body}>
                {
                    LOG_DATA.map((data, index) =>(
                        <div key={index} className={styles.log_list_row}>
                            <div className={styles.log_name}>{data.name}</div>
                            <div className={styles.log_line}></div>
                            <div className={styles.log_bonus}>{data.bonus}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default LogList;
