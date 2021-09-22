import React from "react";
import Image from "next/image";
import styles from "./index.module.css";

const UserInfo = () => {

    return (
        <div className={styles.table_user_info}>
            <div className={styles.table_user_info_avatar}>
                <Image className={styles.avatar_img} src="/avatar.png" alt="" width={30} height={30} layout="responsive" />
            </div>
            <div className={styles.table_user_info_nickname}>好友昵称好友昵称好友昵称</div>
        </div>
    )
}

const LogTable = () => {

    return (
        <div className={styles.invite_log_table}>
            <div className={styles.invite_log_table_header}>
                <div className={styles.table_header_col}>
                    <div className={styles.table_header_content}>好友头像</div>
                </div>
                <div className={styles.table_header_col}>
                    <div className={styles.table_header_content}>注册时间</div>
                </div>
                <div className={styles.table_header_col}>
                    <div className={styles.table_header_content}>连续登录天数</div>
                </div>
            </div>
            <div className={styles.invite_log_table_body}>
                <div className={styles.table_body_row}>
                    <UserInfo />
                    <time>2021.09.21</time>
                    <div className={styles.table_login_days}>0/7</div>
                </div>
                <div className={styles.table_body_row}>
                    <UserInfo />
                    <time>2021.09.21</time>
                    <div className={styles.table_login_days}>0/7</div>
                </div>
                <div className={styles.table_body_row}>
                    <UserInfo />
                    <time>2021.09.21</time>
                    <div className={styles.table_login_days}>0/7</div>
                </div>
                <div className={styles.table_body_row}>
                    <UserInfo />
                    <time>2021.09.21</time>
                    <div className={styles.table_login_days}>0/7</div>
                </div>
                <div className={styles.table_body_row}>
                    <UserInfo />
                    <time>2021.09.21</time>
                    <div className={styles.table_login_days}>0/7</div>
                </div>
            </div>
        </div>
    )
};

export default LogTable;
