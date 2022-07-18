import styles from './Header.module.css';

import todoLogo from '../assets/todo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={todoLogo} alt="Logotipo do Todo"/>
        </header>
    )
}