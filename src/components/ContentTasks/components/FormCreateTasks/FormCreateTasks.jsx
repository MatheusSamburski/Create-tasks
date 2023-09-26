import { useForm } from "react-hook-form";
import { http } from "../../../../axios";
import styles from "./FormCreateTasks.module.css";

export function FormCreateTasks({ setTasksList }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      titulo: "",
    },
  });

  async function createTasks(data) {
    const { titulo } = data;

    const response = await http.post("tasks", {
      titulo,
    });
    
    setTasksList((state) => [response.data, ...state]);
  }

  return (
    <div className={styles.inputCreateTask}>
      <form htmlFor="create-task" onSubmit={handleSubmit(createTasks)}>
        <input
          type="text"
          id="create-task"
          placeholder="Digite aqui sua tarefa"
          required
          {...register("titulo")}
        />
        <button type="submit">Criar</button>
      </form>
    </div>
  );
}
