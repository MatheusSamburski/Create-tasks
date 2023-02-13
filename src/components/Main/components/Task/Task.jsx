import { Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { http } from "../../../../axios";
import { TasksContext } from "../../../../context/ContextTask";
import styles from "./Task.module.css";

export function Task({ titulo, handleDeleteTask, id}) {
    const [taskComplete, setTaskComplete] = useState(false);
    const { tasks, setTasks } = useContext(TasksContext)

    return (
        <div className={styles.contentTasks}>
            <input type="checkbox" onClick={() => setTaskComplete(true)} />
            {!taskComplete ? <span>{titulo}</span> : <span>Tarefa Completa!!</span>}
            <div className={styles.icon}>
                <Trash size={32} onClick={() => handleDeleteTask(id)} />
            </div>
        </div>
    );
}