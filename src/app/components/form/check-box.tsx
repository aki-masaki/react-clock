'use client';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

const CheckBox = ({
    defaultValue = false,
    onChange,
    label,
    id
}: {
    defaultValue?: boolean;
    onChange?: (id: string, state: boolean) => any;
    label: string;
    id: string;
}) => {
    const [state, setState] = useState<boolean>(defaultValue);

    useEffect(() => onChange && onChange(id, state), [state, id, onChange]);

    return (
        <div
            className={`${styles.checkbox} ${state ? styles.checked : ' '}`}
            onClick={() => setState(!state)}>
            <div className={styles['active-indicator']} />
            <span>{label}</span>
            <div className={styles['active-indicator']} />
        </div>
    );
};

export default CheckBox;
