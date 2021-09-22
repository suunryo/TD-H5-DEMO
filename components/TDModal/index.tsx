import React, { ReactElement } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import ICON_CLOSE from "../../assets/close.png";
import styles from "./index.module.css";

export interface TDModalProps {
    visible: boolean;
    top?: string | number;
    onClose: (visible: boolean) => void;
    children?: ReactElement;
}

const TDModal: React.FC<TDModalProps> = (props) => {

    const { visible, top, onClose, children } = props;

    const handleClose = () => {
        onClose(false);
    }


    if (!visible) {
        return null;
    }

    return ReactDOM.createPortal(
        (<div className={styles.modal_wrapper}>
            <div
                className={styles.modal_content}
                style={{top: typeof top === "number" ? top + "px" : top}}
            >
                {children}
                <div className={styles.modal_btn_close} onClick={handleClose}>
                    <Image src={ICON_CLOSE} alt="" width={57} height={40} layout="responsive" />
                </div>
            </div>
        </div>),
        document.body
    )
};

export default TDModal;
