import styles from './TaskItem.module.css'
import { Circle, Trash, CheckCircle } from "phosphor-react"

export function TaskItem() {
    return (
        <div className={styles.taskItem}>
            <ul>
                <li>
                    <button className={styles.circle}>
                        <Circle size={24}/>
                    </button>
                    <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                    <button className={styles.trash}>
                        <Trash size={24}/>
                    </button>
                </li>
            </ul>
        </div>
    );

}