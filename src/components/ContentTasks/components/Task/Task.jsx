import { Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./Task.module.css";

export function Task({ titulo, handleDeleteTask, id }) {
  const [taskComplete, setTaskComplete] = useState(false);

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
