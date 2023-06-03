import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

interface Option {
    id: string;
    label: string;
}

const Select = ({
    options = [],
    id,
    defaultValue,
    onChange
}: {
    id: string;
    options: Option[];
    defaultValue?: string;
    onChange?(id: string, activeOptionId: string): any;
}) => {
    const [activeOptionId, setOptionId] = useState<string>(
        defaultValue || options[0].id
    );

    useEffect(
        () => onChange && onChange(id, activeOptionId),
        [activeOptionId, id, onChange]
    );

    return (
        <div className={styles.select}>
            {options.map(option => (
                <div
                    className={`${styles.option} ${
                        activeOptionId === option.id ? styles.active : ' '
                    }`}
                    key={option.id}
                    onClick={() => setOptionId(option.id)}>
                    <div className={styles['active-indicator']} />
                    <span>{option.label}</span>
                    <div className={styles['active-indicator']} />
                </div>
            ))}
        </div>
    );
};

export { Select };
export type { Option };
