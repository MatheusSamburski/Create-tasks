import { useContext, useEffect} from "react";
import { http } from "../../axios";
import { Task } from "./components/Task/Task";
import styles from "./Main.module.css";
import { useForm } from "react-hook-form";
import { TasksContext } from "../../context/ContextTask";

export function Main({handleDeleteTask}) {
    const {tasks, setTasks} = useContext(TasksContext)

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

    async function handleDeleteTask(id) {
        console.log(`Deleting task with ID: ${id}`);
        console.log(`Full URL: http://localhost:3000/tasks/${id}`);
        await http.delete(`tasks/${id}`);
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks([...updatedTasks]);
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
                    <Task key={task.id} titulo={task.titulo} handleDeleteTask={() => handleDeleteTask(task.id)} />
                ))}
            </main>
        </>
    );
}