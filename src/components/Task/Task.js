import { WrapperTask, Text, TaskBtn, CheckBox, } from "./Task.styled";

export const Task = ({ task }) => {
    return (
        <WrapperTask>
            <CheckBox
                type={"checkbox"}
                checked={task.completed}
            />
            <Text>{task.text}</Text>
            <TaskBtn>
                X
            </TaskBtn>
        </WrapperTask>
    );
};