import React, { ReactElement, useState } from "react";
import styles from "./index.module.css";

interface TDSelectProps {
    label?: string;
    value?: any;
    disabled?: boolean;
    placeholder?: string;
    onChane?: (value: any) => void;
    children?: any;
}
const TDSelect: React.FC<TDSelectProps> = (props) => {

    const { label, value, placeholder, disabled, children, onChane } = props;
    const [visible, setVisible] = useState<boolean>(false);

    const getValue = () => {
        if (!value) {
            return placeholder;
        }

        if (Array.isArray(children)) {
            const child = children.find(child => child.props.value == value);

            if (child) {
                return child.props.name;
            }

            return placeholder;
        }
        if (children && children.props && children.props.value == value) {
            return children.props.name;
        }

        return value;
    }

    const handleOpen = () => {
        if (disabled) {
            return;
        }

        setVisible(!visible)
    }

    const handleSelect = (e: React.MouseEvent<HTMLDivElement>) => {
        const { target } = e;

        if ((target as HTMLDivElement).dataset) {
            const { value } = (target as HTMLDivElement).dataset;

            if (onChane) {
                onChane(value);
            }
        }
    }

    return (
        <div className={styles.td_select}>
            {label && <div className={styles.td_select_label}>{label}</div>}
            <div className={`${styles.td_select_section} ${disabled ? styles.td_select_section_disabled : ""}`} onClick={handleOpen}>
                <div className={styles.td_select_value}>{getValue()}</div>
                <div
                    className={`${styles.td_select_dropdown} ${visible ? styles.td_select_dropdown_active : ""}`}
                    onClick={handleSelect}
                >
                    {children}
                </div>
            </div>
        </div>
    )
}

export default TDSelect;

interface TDOptionProps {
    value: any;
    name: string;
}
export const TDOption: React.FC<TDOptionProps> = (props) => {

    const { name, value } = props;

    return (
        <div data-value={value} className={styles.td_select_option} key={value}>{name}</div>
    )
}
