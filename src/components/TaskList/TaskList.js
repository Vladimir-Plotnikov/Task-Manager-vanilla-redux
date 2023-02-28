import { Task } from "components/Task/Task";
import { ListTask, ListItemTask } from "./TaskList.styled";

export const TaskList = () => {
    return (
    <ListTask>
        {[].map(task => (
            <ListItemTask key={task.id}>
                <Task task={task} />
            </ListItemTask>
        ))}
    </ListTask>
);
};