import styles from './styles.module.css';

const Link = ({
    href,
    label,
    id
}: {
    href: string;
    label?: string;
    id?: string;
}) => {
    return (
        <div
            id={id}
            className={styles['link']}
            onClick={() => open(href, '_blank')}>
            <div className={styles['active-indicator']} />
            <span>{label || href}</span>
            <div className={styles['active-indicator']} />
        </div>
    );
};

export default Link;
