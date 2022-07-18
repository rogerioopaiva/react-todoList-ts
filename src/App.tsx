import { Header } from './components/Header';
import { CreateNewTask } from './components/CreateNewTask';
import { TaskList } from './components/TaskList';
import { EmptyList } from './components/EmptyList';
import styles from './App.module.css';
import './global.css';

export function App() {

  return (
    <div>
        <Header />
      <div className={styles.wrapper}>
        <CreateNewTask />
        <TaskList />
      </div>
    </div>
  )
}
