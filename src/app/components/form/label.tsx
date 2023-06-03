import styles from './styles.module.css';

export const Label = ({ text }: { text: string }) => {
    return <span className={styles.label}>{text}</span>;
};
