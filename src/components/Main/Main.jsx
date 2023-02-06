import { useEffect, useState } from "react";
import { http } from "../../axios";
import { Task } from "./components/Task/Task";
import styles from "./Main.module.css";
import { useForm } from "react-hook-form";

export function Main() {
    const [tasks, setTasks] = useState([]);

    const { register, handleSubmit } = useForm({
        defaultValues: {
            titulo: ""
        }
    });

    async function createTasks(data) {
        const { titulo } = data;

        const response = await http.post("tasks", {
            titulo
        })
        setTasks(state => [response.data, ...state])
    }

    async function getTasks() {
        const response = await http.get("/tasks");
        setTasks(response.data);
    }

    useEffect(() => {
        getTasks();
    }, [])

    return (
        <>

            <h1 className={styles.textPendingQuest}>Liste aqui suas tarefas pendentes</h1>
            <div className={styles.inputCreateTask}>
                <form htmlFor="create-task" onSubmit={handleSubmit(createTasks)}>
                    <input type="text"
                        id="create-task"
                        placeholder="Digite aqui sua tarefa"
                        required
                        {...register("titulo")}
                    />
                    <button type="submit">Criar</button>
                </form>
            </div>
            <main className={styles.main}>
                {tasks.map(task => (
                    <Task key={task.id} titulo={task.titulo} />
                ))}
            </main>

        </>
    );
}