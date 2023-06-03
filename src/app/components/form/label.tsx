import styles from './styles.module.css';

const Label = ({
    text,
    big = false,
    secondary = false
}: {
    text: string;
    big?: boolean;
    secondary?: boolean;
}) => {
    return (
        <span
            className={`${styles.label} ${big && styles.big} ${
                secondary && styles.secondary
            }`}>
            {text}
        </span>
    );
};

export default Label;
