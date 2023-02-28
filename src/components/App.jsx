import { Layout } from "./Layout/Layout";
import { Appbar } from "./AppBar/AppBar";
import { TaskForm } from "./TaskForm/TaskForm";
import { TaskList } from "./TaskList/TaskList";

export const App = () => {
  return (
    <Layout>
      <Appbar />
      <TaskForm />
      <TaskList />
    </Layout>
  )
}