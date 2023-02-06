import { useState } from "react";
import styles from "./Task.module.css";

export function Task({titulo}) {
    const [taskComplete, setTaskComplete] = useState(false);
    
    return (
        <div className={styles.contentTasks}>
            <input type="checkbox" onClick={handleDeleteTask}/>
            {!taskComplete ? <span>{titulo}</span> : <span>Tarefa Completa!!</span>}
        </div>
    );
}