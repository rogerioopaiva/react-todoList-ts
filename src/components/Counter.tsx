import styles from './Counter.module.css';

export function Counter() {
    return (
        <div className={styles.counter}>
            <span>0</span>
        </div>
    )
}