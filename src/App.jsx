import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { TasksProvider } from './context/ContextTask'
import './global.css'

export function App() {

  return (
    <>
      <TasksProvider>
        <Header />
        <Main />
      </TasksProvider>
    </>

  )
}


