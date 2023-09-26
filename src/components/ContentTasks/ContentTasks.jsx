import { useEffect, useState } from "react";
import { http } from "../../axios";
import { Task } from "./components/Task/Task";

import styles from "./ContentTasks.module.css";
import { FormCreateTasks } from "./components/FormCreateTasks/FormCreateTasks";

export function ContentTasks({ handleDeleteTask }) {
  const [tasksList, setTasksList] = useState([]);

  useEffect(() => {
    async function getTasks() {
      const response = await http.get("/tasks");
      setTasksList(response.data);
    }

    getTasks();
  }, []);

  async function handleDeleteTask(id) {
    await http.delete(`tasks/${id}`);
    const updatedTasks = tasksList.filter((task) => task.id !== id);
    setTasksList([...updatedTasks]);
  }

  return (
    <>
      <h1 className={styles.textPendingQuest}>
        Liste aqui suas tarefas pendentes
      </h1>
      <FormCreateTasks setTasksList={setTasksList} />
      <main className={styles.main}>
        {tasksList.map((task) => (
          <Task
            key={task.id}
            titulo={task.titulo}
            handleDeleteTask={() => handleDeleteTask(task.id)}
          />
        ))}
      </main>
    </>
  );
}
