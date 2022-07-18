import styles from './EmptyList.module.css'
import taskClipboard from '../assets/task-clipboard.png'

export function EmptyList() {
    return (
        <div className={styles.emptyList}>
                    <img src={taskClipboard} alt="imagem sem tarefas cadastradas" />
                    <p className={styles.emptyListTitle}>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}