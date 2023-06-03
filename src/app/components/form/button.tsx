import React from 'react';
import styles from './styles.module.css';

export const Buttons = ({ children }: { children: React.ReactNode }) => {
    return <div className={styles.buttons}>{children}</div>;
};

const Button = ({
    label,
    primary = false,
    onClick
}: {
    label: string;
    primary?: boolean;
    onClick?(): any;
}) => {
    return (
        <div
            className={`${styles.button} ${primary && styles.primary}`}
            onClick={() => onClick && onClick()}>
            <span>{label}</span>
        </div>
    );
};

export default Button;
