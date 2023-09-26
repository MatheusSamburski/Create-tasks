import { ChatCenteredText } from "phosphor-react";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.contentHeader}>
        <h1>Lista de Tarefas</h1>
        <ChatCenteredText size={48} />
      </div>
    </header>
  );
}
