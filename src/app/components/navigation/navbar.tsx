import { NavigationKey } from './navigation';
import styles from './styles.module.css';

const NavBar = ({
    keys,
    onChange,
    activeKeyId
}: {
    keys: NavigationKey[];
    onChange: (key: NavigationKey) => any;
    activeKeyId: string;
}) => {
    return (
        <div className={styles.navbar}>
            {keys.map(key => {
                return (
                    <div
                        className={`${styles['navbar-item']} ${
                            activeKeyId === key.id && styles.active
                        }`}
                        key={key.id}
                        onClick={() => onChange(key)}>
                        <i className={`bi bi-${key.iconClass}`}></i>
                        <span>{key.displayName}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default NavBar;
