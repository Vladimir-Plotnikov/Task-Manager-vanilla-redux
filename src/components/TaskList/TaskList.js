import { Task } from "components/Task/Task";
import { ListTask, ListItemTask } from "./TaskList.styled";

import { useSelector } from "react-redux";
import { statusFilters } from "redux/constants";

import { getStatusFilter } from "redux/selectors";
import { getTasks } from "redux/selectors";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);
    return (
    <ListTask>
        {visibleTasks.map(task => (
            <ListItemTask key={task.id}>
                <Task task={task} />
            </ListItemTask>
        ))}
    </ListTask>
);
};