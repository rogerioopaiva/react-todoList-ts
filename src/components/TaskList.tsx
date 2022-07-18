import styles from './TaskList.module.css'
import { Counter } from './Counter'
import { EmptyList } from './EmptyList';
import { TaskItem } from './TaskItem';

export function TaskList() {
    return (
        <div className={styles.taskList}>
            <div className={styles.taskAccountant}>
                <span className={styles.tasksCreated}>Tarefas Criadas<Counter /></span>                
                <span className={styles.tasksCompleted}>Tarefas Concluídas <Counter /></span>
            </div>
            {/* <EmptyList /> */}
            {/* <TaskItem /> */}
        </div>
    )
}