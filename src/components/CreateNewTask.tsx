import styles from "./CreateNewTask.module.css";
import { PlusCircle } from "phosphor-react";
import { v4 as uuidv4 } from 'uuid';

const tasks = [
    {
        id: uuidv4(),
        title: 'Terminar o desafio',
        isComplete: true,     
    },
    {
        id: uuidv4(),
        title: 'Estudar Typescrypt',
        isComplete: false,     
    }
];

export function CreateNewTask() {
    return (
        <form className={styles.CreateNewTaskForm}>
            <input type="text" placeholder="Adicione uma nova tarefa" />
            <button type="submit" className="CreateNewTaskButton">
                Criar
                <PlusCircle size={20} weight="bold" />
            </button>
        </form>
    );
}
